import Link from "next/link";

const navItems = [
  { label: "SOBRE", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "TOUR", href: "#tour" },
  { label: "PROJETOS", href: "#projects" },
  { label: "EXPERIÊNCIA", href: "#experience" },
  { label: "CONTATO", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-green-500/10 bg-black/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        
        <Link
          href="/"
          className="font-mono text-sm font-bold tracking-wider text-green-500 transition hover:text-green-400"
        >
          &gt; VINICIUS_
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-mono text-xs text-zinc-400 transition hover:text-green-400"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="font-mono text-xs text-green-500/60">
          <span className="mr-1 inline-block h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          ONLINE
        </div>

      </nav>
    </header>
  );
}