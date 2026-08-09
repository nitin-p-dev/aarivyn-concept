import { useEffect, useRef } from "react";
import * as THREE from "three";

type Variant = "swirl" | "wave" | "sphere";

const PALETTES: Record<Variant, [number, number, number]> = {
  swirl: [0x6366f1, 0x06b6d4, 0x8b5cf6],
  wave: [0x06b6d4, 0x8b5cf6, 0xf59e0b],
  sphere: [0x10b981, 0x14b8a6, 0x06b6d4],
};

/**
 * Lightweight WebGL particle mesh. Used both as the fixed ambient canvas
 * layer and as inline section visuals.
 */
export function ParticleField({
  variant = "swirl",
  className = "",
  count = 900,
  opacity = 0.55,
}: {
  variant?: Variant;
  className?: string;
  count?: number;
  opacity?: number;
}) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    } catch {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
    camera.position.z = variant === "wave" ? 9 : 11;

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    host.appendChild(renderer.domElement);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";

    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const seeds = new Float32Array(count);
    const palette = PALETTES[variant].map((hex) => new THREE.Color(hex));

    for (let i = 0; i < count; i++) {
      let x = 0;
      let y = 0;
      let z = 0;
      if (variant === "sphere") {
        const phi = Math.acos(2 * Math.random() - 1);
        const theta = Math.random() * Math.PI * 2;
        const r = 4.6;
        x = r * Math.sin(phi) * Math.cos(theta);
        y = r * Math.sin(phi) * Math.sin(theta);
        z = r * Math.cos(phi);
      } else if (variant === "wave") {
        x = (Math.random() - 0.5) * 22;
        y = (Math.random() - 0.5) * 9;
        z = (Math.random() - 0.5) * 8;
      } else {
        const a = Math.random() * Math.PI * 2;
        const r = Math.pow(Math.random(), 0.6) * 7.5;
        x = Math.cos(a) * r;
        y = Math.sin(a) * r * 0.62;
        z = (Math.random() - 0.5) * 6;
      }
      positions.set([x, y, z], i * 3);
      seeds[i] = Math.random() * Math.PI * 2;
      const c = palette[i % palette.length]!.clone().lerp(new THREE.Color(0xffffff), 0.25);
      colors.set([c.r, c.g, c.b], i * 3);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: variant === "sphere" ? 0.085 : 0.07,
      vertexColors: true,
      transparent: true,
      opacity,
      depthWrite: false,
      sizeAttenuation: true,
    });
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const base = Float32Array.from(positions);
    const attr = geometry.getAttribute("position") as THREE.BufferAttribute;

    const resize = () => {
      const { clientWidth: w, clientHeight: h } = host;
      if (!w || !h) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(host);

    let raf = 0;
    const clock = new THREE.Clock();
    const render = () => {
      const t = clock.getElapsedTime();
      if (variant === "wave") {
        for (let i = 0; i < count; i++) {
          const x = base[i * 3]!;
          const z = base[i * 3 + 2]!;
          attr.setY(i, base[i * 3 + 1]! + Math.sin(x * 0.4 + t * 0.9 + z * 0.3) * 0.7);
        }
        attr.needsUpdate = true;
      } else if (variant === "swirl") {
        points.rotation.z = t * 0.06;
        points.rotation.x = Math.sin(t * 0.15) * 0.15;
      } else {
        points.rotation.y = t * 0.12;
        points.rotation.x = Math.sin(t * 0.2) * 0.2;
      }
      renderer.render(scene, camera);
      raf = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      host.removeChild(renderer.domElement);
    };
  }, [variant, count, opacity]);

  return <div ref={hostRef} className={className} aria-hidden="true" />;
}

export function AmbientCanvas() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 bg-background">
      <div className="absolute inset-0 opacity-[0.13]">
        <ParticleField variant="swirl" count={1100} opacity={0.9} className="h-full w-full" />
      </div>
      <div className="absolute inset-0 bg-mesh-glow" />
    </div>
  );
}
