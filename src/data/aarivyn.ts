export const heroMetrics = [
  { value: "180+", label: "Active Members" },
  { value: "24", label: "Active Research Streams" },
  { value: "47", label: "Deployments" },
  { value: "3", label: "Agency Briefs" },
];

export const pillars = [
  { title: "Research", copy: "Explore first principles and publish the learning." },
  { title: "Talent", copy: "Find builders who care about the same frontier." },
  { title: "Delivery", copy: "Ship useful solutions for real organizations." },
];

export const labProjects = [
  {
    name: "OptiSight PCB Inspector",
    trl: "TRL 4",
    stage: "Prototype",
    progress: 62,
    tags: ["Computer Vision", "AOI", "Edge AI"],
  },
  {
    name: "WhatsApp Context Agent",
    trl: "TRL 3",
    stage: "In Development",
    progress: 41,
    tags: ["Agents", "RAG", "NLP"],
  },
  {
    name: "Autonomous UAV Payload Lab",
    trl: "TRL 5",
    stage: "Active Research",
    progress: 74,
    tags: ["CUDA", "MLOps", "Autonomous Systems"],
  },
  {
    name: "Community GPU Cluster",
    trl: "TRL 6",
    stage: "Deployed",
    progress: 91,
    tags: ["Kubernetes", "CUDA", "Distributed"],
  },
];

export const tracks = [
  {
    id: "Track 01",
    name: "Intelligence System Build",
    copy: "End-to-end design and deployment of applied intelligence systems inside your stack.",
    scope: ["Architecture", "Model pipeline", "Production handover"],
  },
  {
    id: "Track 02",
    name: "Research Sprint",
    copy: "A focused investigation into a hard technical question, delivered as a decision-ready report.",
    scope: ["Literature scan", "Prototype", "Findings memo"],
  },
  {
    id: "Track 03",
    name: "Infrastructure Audit",
    copy: "Deep review of compute, data and reliability foundations before you scale spend.",
    scope: ["Cost model", "Risk register", "Remediation plan"],
  },
];

export const memberFilters = [
  "All Members",
  "AI & Neural Systems",
  "Cryptography & Security",
  "Distributed Systems",
  "Agency & Infrastructure",
];

export const members = [
  { name: "Dr. Alex Vance", title: "Lead Quantum Researcher", domain: "AI & Neural Systems" },
  { name: "Dr. Mira Okafor", title: "Principal Cryptographer", domain: "Cryptography & Security" },
  { name: "Kenji Nakamura", title: "Distributed Systems Architect", domain: "Distributed Systems" },
  { name: "Sofia Reyes", title: "Agency Infrastructure Lead", domain: "Agency & Infrastructure" },
  { name: "Dr. Rajesh Kapoor", title: "Senior AI Researcher", domain: "AI & Neural Systems" },
  { name: "Elena Volkov", title: "Security Research Engineer", domain: "Cryptography & Security" },
  { name: "Marcus Chen", title: "Systems Engineer", domain: "Distributed Systems" },
  { name: "Amara Diallo", title: "Applied ML Engineer", domain: "AI & Neural Systems" },
  { name: "Dr. Yuki Tanaka", title: "Protocol Researcher", domain: "Cryptography & Security" },
  { name: "Liam O'Brien", title: "Platform Reliability Lead", domain: "Agency & Infrastructure" },
  { name: "Priya Sharma", title: "Edge Compute Researcher", domain: "Distributed Systems" },
  { name: "Diego Morales", title: "Delivery Architect", domain: "Agency & Infrastructure" },
];

export const forgeNodes = [
  { id: "NODE-GX1A", name: "Photonic Interconnect Mesh", status: "Open", collaborators: 6 },
  { id: "NODE-0X28", name: "Sparse Attention Kernels", status: "Recruiting", collaborators: 4 },
  { id: "NODE-0X3C", name: "Zero-Knowledge Rollup Prover", status: "Active", collaborators: 8 },
  { id: "NODE-0X40", name: "Swarm Telemetry Fabric", status: "Open", collaborators: 3 },
  { id: "NODE-0X5E", name: "Neuromorphic Vision Stack", status: "Active", collaborators: 5 },
  { id: "NODE-0X6F", name: "Deterministic Build Farm", status: "Recruiting", collaborators: 7 },
];

export const squads = [
  {
    name: "Qubit Wranglers",
    event: "QuantumHack 2025",
    need: "Cryptography + Rust",
    slots: "2 of 5 seats open",
  },
  {
    name: "Entangled States",
    event: "QuantumHack 2025",
    need: "Quantum Simulation + Python",
    slots: "2 of 4 seats open",
  },
  {
    name: "Edge Runners",
    event: "Edge AI Buildathon",
    need: "Embedded CV + CUDA",
    slots: "3 of 6 seats open",
  },
  {
    name: "Byzantine Generals",
    event: "Decentralized Systems Hack",
    need: "Consensus + Go",
    slots: "1 of 4 seats open",
  },
];


export const bounties = [
  { amount: "$4,500", title: "CUDA kernel optimisation", scope: "Performance", days: "12 days left" },
  { amount: "$8,000", title: "L2 Bridge Audit", scope: "Security", days: "9 days left" },
  { amount: "$6,000", title: "K8s Operator", scope: "Infrastructure", days: "18 days left" },
  { amount: "$3,200", title: "Telemetry pipeline", scope: "Data", days: "6 days left" },
  { amount: "$5,500", title: "Raft implementation", scope: "Distributed", days: "21 days left" },
  { amount: "$4,200", title: "PCB Layout", scope: "Hardware", days: "14 days left" },
];

export const resources = [
  { type: "Roadmaps", title: "Applied ML Engineer Roadmap", meta: "12 stages · updated weekly" },
  { type: "Roadmaps", title: "Distributed Systems Roadmap", meta: "9 stages · consensus focused" },
  { type: "Snippets", title: "CUDA Warp Reduction Snippets", meta: "24 snippets · benchmarked" },
  { type: "Snippets", title: "Kubernetes Operator Scaffolds", meta: "11 snippets · Go" },
  { type: "Research Papers", title: "Sparse Attention at Edge Scale", meta: "AARIVYN Lab · 2026" },
  { type: "Research Papers", title: "Verifiable Bridges: A Survey", meta: "AARIVYN Lab · 2025" },
];
