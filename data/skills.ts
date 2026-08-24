export interface Skill {
  name: string;
  category: string;
  level: "learning" | "Basic" | "intermediate" | "advanced";
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
    level: "learning",
  },
  {
    name: "JavaScript",
    category: "Development",
    level: "learning",
  },
  {
    name: "React",
    category: "Development",
    level: "learning",
  },
  {
    name: "Next.js",
    category: "Development",
    level: "learning",
  },
  {
    name: "Node.js",
    category: "Backend",
    level: "learning",
  },
  {
    name: "SQL",
    category: "Database",
    level: "learning",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    level: "learning",
  },
  {
    name: "TCP/IP",
    category: "Networking",
    level: "intermediate",
  },
  {
    name: "Mikrotik",
    category: "Networking",
    level: "Basic",
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
    level: "learning",
  },
];