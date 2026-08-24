interface TerminalProps {
  command: string;
  output: string;
}

export default function Terminal({
  command,
  output,
}: TerminalProps) {
  return (
    <div className="w-full max-w-3xl overflow-hidden rounded-lg border border-green-500/40 bg-black shadow-[0_0_30px_rgba(34,197,94,0.15)]">

      <div className="flex items-center gap-2 border-b border-green-500/20 bg-green-950/20 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-500" />
        <span className="h-3 w-3 rounded-full bg-yellow-500" />
        <span className="h-3 w-3 rounded-full bg-green-500" />

        <span className="ml-2 text-xs text-green-500/60">
          terminal
        </span>
      </div>

      <div className="p-6 font-mono text-sm text-green-400">

        <p>
          vinicius@portfolio:~$ {command}
        </p>

        <p className="mt-2 text-green-300">
          {output}
        </p>

        <p className="mt-4">
          vinicius@portfolio:~$
          <span className="ml-1 inline-block animate-pulse">
            █
          </span>
        </p>

      </div>
    </div>
  );
}