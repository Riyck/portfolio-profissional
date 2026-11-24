export interface Skill {
  name: string;
  category: string;
  level: "learning" | "basic" | "intermediate" | "advanced";
}

export const skills: Skill[] = [
  {
    name: "Python",
    category: "Development",
    level: "intermediate",
  },
  {
    name: "TypeScript",
    category: "Development",
    level: "intermediate",
  },
  {
    name: "JavaScript",
    category: "Development",
    level: "intermediate",
  },
  {
    name: "React Native / Expo",
    category: "Mobile",
    level: "intermediate",
  },
  {
    name: "React",
    category: "Development",
    level: "basic",
  },
  {
    name: "Next.js",
    category: "Development",
    level: "basic",
  },
  {
    name: "Node.js",
    category: "Backend",
    level: "intermediate",
  },
  {
    name: "FastAPI / Flask",
    category: "Backend",
    level: "basic",
  },
  {
    name: "Supabase",
    category: "Backend",
    level: "intermediate",
  },
  {
    name: "SQL",
    category: "Database",
    level: "intermediate",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    level: "intermediate",
  },
  {
    name: "APIs de IA (OpenAI)",
    category: "AI",
    level: "intermediate",
  },
  {
    name: "Git / GitHub",
    category: "Tools",
    level: "intermediate",
  },
  {
    name: "TCP/IP",
    category: "Networking",
    level: "intermediate",
  },
  {
    name: "Mikrotik",
    category: "Networking",
    level: "basic",
  },
  {
    name: "Wireshark",
    category: "Cybersecurity",
    level: "learning",
  },
  {
    name: "Nmap",
    category: "Cybersecurity",
    level: "learning",
  },
  {
    name: "Linux",
    category: "Infrastructure",
    level: "basic",
  },
];
