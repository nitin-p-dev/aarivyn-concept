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
  { amount: "$4,500", title: "CUDA Kernel Optimization", scope: "Performance", days: "12 days left", skill: "AI Mesh" },
  { amount: "$8,000", title: "L2 Bridge Security Audit", scope: "Security", days: "9 days left", skill: "Cryptography" },
  { amount: "$6,000", title: "K8s GPU Controller", scope: "Infrastructure", days: "18 days left", skill: "Backend" },
  { amount: "$3,200", title: "Telemetry Dashboard", scope: "Data", days: "6 days left", skill: "UI/UX" },
  { amount: "$5,500", title: "Raft Consensus in Rust", scope: "Distributed", days: "21 days left", skill: "Distributed Systems" },
  { amount: "$4,200", title: "Edge AI PCB Layout", scope: "Hardware", days: "14 days left", skill: "Hardware" },
];

export const resourceFilters = ["All Types", "Roadmap", "Snippet", "Paper"];

export const resources = [
  { type: "Roadmap", title: "Deep Learning Roadmap 2025", meta: "12 stages · updated weekly", domain: "AI & Neural Systems" },
  { type: "Paper", title: "Post-Quantum Cryptography Primer", meta: "AARIVYN Lab · 2026", domain: "Cryptography & Security" },
  { type: "Snippet", title: "Distributed Consensus Snippet Pack", meta: "24 snippets · benchmarked", domain: "Distributed Systems" },
  { type: "Roadmap", title: "Kubernetes GPU Scheduling Guide", meta: "9 stages · operator focused", domain: "Agency & Infrastructure" },
  { type: "Snippet", title: "WebGL Shader Patterns", meta: "18 snippets · GLSL", domain: "UI/UX" },
  { type: "Paper", title: "Hardware-Software Co-Design Paper", meta: "AARIVYN Lab · 2025", domain: "Hardware" },
];

export const skillTags = [
  "UI/UX",
  "Backend",
  "Hardware",
  "AI Mesh",
  "Cryptography",
  "Distributed Systems",
];

export const interestAreas = ["Startups", "Research", "Freelance"];

export const pillarDossiers: Record<string, { summary: string; points: string[] }> = {
  Research: {
    summary:
      "Every stream starts from first principles and ends in a published artefact the collective can build on.",
    points: [
      "24 active streams across AI, quantum and distributed systems",
      "Weekly peer review with stream leads",
      "Findings published to the Resource Vault under author credit",
    ],
  },
  Talent: {
    summary:
      "A directory of 180+ builders mapped by domain, matched to nodes, squads and paid bounties.",
    points: [
      "Skill-tagged profiles routed to forge nodes",
      "Mentorship pairings inside each research stream",
      "Bounty income routed from client engagements",
    ],
  },
  Delivery: {
    summary:
      "Client work runs through the same engineering standard as the lab: measured, versioned, handed over.",
    points: [
      "Three fixed tracks with transparent scoping",
      "TRL-graded readiness before any production handover",
      "Post-delivery infrastructure ownership plan",
    ],
  },
};

export const researchStreams = [
  { name: "Sparse Attention Kernels", domain: "AI", lead: "Dr. Rajesh Kapoor" },
  { name: "Neuromorphic Vision Stack", domain: "AI", lead: "Amara Diallo" },
  { name: "Edge Model Distillation", domain: "AI", lead: "Dr. Elara Voss" },
  { name: "Post-Quantum Key Exchange", domain: "Quantum", lead: "Dr. Mira Okafor" },
  { name: "Quantum Error Mitigation", domain: "Quantum", lead: "Dr. Alex Vance" },
  { name: "Lattice Signature Benchmarks", domain: "Quantum", lead: "Dr. Yuki Tanaka" },
  { name: "Raft Consensus Variants", domain: "Distributed", lead: "Kenji Nakamura" },
  { name: "Swarm Telemetry Fabric", domain: "Distributed", lead: "Priya Sharma" },
  { name: "Deterministic Build Farm", domain: "Distributed", lead: "Marcus Chen" },
];

export const deployments = [
  { name: "Community GPU Cluster", trl: "TRL 6", client: "Internal · 180 members" },
  { name: "Autonomous UAV Payload Lab", trl: "TRL 5", client: "Defence research partner" },
  { name: "OptiSight Inline AOI", trl: "TRL 5", client: "Electronics manufacturer" },
  { name: "Telemetry Ingest Fabric", trl: "TRL 6", client: "Mobility platform" },
  { name: "ZK Bridge Monitor", trl: "TRL 5", client: "L2 protocol team" },
];

export const agencyBriefs = [
  { org: "Nordic Robotics Group", track: "Track 01 · Intelligence System Build", status: "In delivery" },
  { org: "Helix Bio Compute", track: "Track 02 · Research Sprint", status: "Discovery" },
  { org: "Atlas Grid Energy", track: "Track 03 · Infrastructure Audit", status: "Scoping" },
];

export const memberSkillGroups = [
  { group: "AI & Neural Systems", count: 62 },
  { group: "Cryptography & Security", count: 38 },
  { group: "Distributed Systems", count: 44 },
  { group: "Agency & Infrastructure", count: 36 },
];

export const forgeNeeds: Record<string, string[]> = {
  "NODE-GX1A": ["Hardware", "Distributed Systems"],
  "NODE-0X28": ["AI Mesh", "Backend"],
  "NODE-0X3C": ["Cryptography", "Backend"],
  "NODE-0X40": ["Distributed Systems", "Hardware"],
  "NODE-0X5E": ["AI Mesh", "Hardware"],
  "NODE-0X6F": ["Backend", "Distributed Systems"],
};

export const hackathonEvents = [
  { name: "QuantumHack 2025", window: "12-14 Sep", focus: "Quantum simulation & PQC" },
  { name: "Edge AI Buildathon", window: "03-05 Oct", focus: "On-device inference" },
  { name: "Decentralized Systems Hack", window: "21-23 Nov", focus: "Consensus & rollups" },
];

export const coreMemberFilters = ["All Members", "Research Leads", "Core Tech"];

export const coreMembers = [
  {
    name: "Dr. Elara Voss",
    title: "Lead AI Researcher",
    group: "Research Leads",
    domain: "AI & Neural Systems",
    bio: "Leads the neural systems streams, from sparse attention kernels to edge distillation.",
  },
  {
    name: "Kenji Nakamura",
    title: "Distributed Systems Architect",
    group: "Core Tech",
    domain: "Distributed Systems",
    bio: "Designs the consensus and telemetry fabric behind AARIVYN deployments.",
  },
  {
    name: "Sofia Reyes",
    title: "Web Admin & Infrastructure Lead",
    group: "Core Tech",
    domain: "Agency & Infrastructure",
    bio: "Owns platform reliability, the vault and the collective's delivery infrastructure.",
  },
];
