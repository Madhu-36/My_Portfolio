import { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

type CommandLog = {
  command: string;
  output: React.ReactNode;
};

export default function InteractiveTerminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandLog[]>([
    {
      command: 'whoami',
      output: <span className="text-ink-200">Madhu S</span>
    },
    {
      command: 'cat skills.txt',
      output: (
        <>
          <p className="text-ink-200">&gt; AI Engineer</p>
          <p className="text-ink-200">&gt; Game Developer</p>
          <p className="text-ink-200">&gt; Cyber Security / Ethical Hacker</p>
        </>
      )
    }
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    let output: React.ReactNode = <span className="text-red-400">Command not found: {cmd}. Type 'help' for available commands.</span>;

    if (cmd === 'help') {
      output = (
        <ul className="text-ink-200 list-disc list-inside">
          <li><strong>whoami</strong> - Print current user</li>
          <li><strong>cat skills.txt</strong> - List core skills</li>
          <li><strong>clear</strong> - Clear terminal output</li>
          <li><strong>projects</strong> - List featured projects</li>
          <li><strong>sudo</strong> - Execute a command as superuser</li>
        </ul>
      );
    } else if (cmd === 'whoami') {
      output = <span className="text-ink-200">Madhu S</span>;
    } else if (cmd === 'cat skills.txt') {
      output = (
        <>
          <p className="text-ink-200">&gt; AI Engineer</p>
          <p className="text-ink-200">&gt; Game Developer</p>
          <p className="text-ink-200">&gt; Cyber Security / Ethical Hacker</p>
        </>
      );
    } else if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    } else if (cmd === 'projects') {
      output = (
        <ul className="text-ink-200">
          <li>- Adaptive Firewall (AI/Security)</li>
          <li>- ASTra (Python Tools)</li>
          <li>- DevIgnite (Rust CLI)</li>
          <li>- Game Complex (JS Game)</li>
        </ul>
      );
    } else if (cmd.startsWith('sudo')) {
      output = <span className="text-gold-400 font-bold">Access Granted: Welcome Admin. Initiating Override... Just kidding!</span>;
    }

    setHistory((prev) => [...prev, { command: input, output }]);
    setInput('');
  };

  return (
    <div className="terminal border-glow overflow-hidden h-64 flex flex-col font-mono">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-ink-800 bg-ink-900/80 px-4 py-3 shrink-0">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-500/70" />
          <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
          <span className="h-3 w-3 rounded-full bg-green-500/70" />
        </div>
        <span className="ml-2 flex items-center gap-1.5 text-xs text-ink-400">
          <TerminalIcon size={12} />
          madhu@portfolio:~$
        </span>
      </div>
      
      {/* Body */}
      <div className="p-5 text-sm leading-relaxed overflow-y-auto flex-grow" onClick={() => document.getElementById('terminal-input')?.focus()}>
        {history.map((log, i) => (
          <div key={i} className="mb-2">
            <p className="text-ink-400">
              <span className="text-accent-400">$</span> {log.command}
            </p>
            <div className="mt-1">{log.output}</div>
          </div>
        ))}
        
        <form onSubmit={handleCommand} className="flex items-center gap-2 mt-2">
          <span className="text-accent-400">$</span>
          <input
            id="terminal-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent border-none outline-none text-ink-200 flex-grow caret-accent-400"
            autoComplete="off"
            spellCheck="false"
          />
        </form>
        <div ref={endRef} />
      </div>
    </div>
  );
}
