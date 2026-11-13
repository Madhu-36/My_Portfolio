import { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';
import { useSoundEffects } from '../hooks/useSoundEffects';

type CommandLog = {
  command: string;
  output: React.ReactNode;
};

const AVAILABLE_COMMANDS = [
  'help', 'whoami', 'cat skills.txt', 'projects', 'experience',
  'resume', 'banner', 'github', 'linkedin', 'repo', 'date', 'time',
  'about', 'portfolio', 'clear', 'sudo'
];

export default function InteractiveTerminal() {
  const [input, setInput] = useState('');
  const [cmdHistory, setCmdHistory] = useState<string[]>(['whoami', 'cat skills.txt']);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll the terminal container internally without affecting the window scroll position
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [history]);

  const { playClick } = useSoundEffects();

  const executeCommand = (rawCmd: string) => {
    playClick();
    if (!rawCmd.trim()) return;

    const cmd = rawCmd.trim().toLowerCase();
    let output: React.ReactNode = <span className="text-red-400">Command not found: {cmd}. Type 'help' for available commands.</span>;

    if (cmd === 'help') {
      output = (
        <div className="space-y-2 text-ink-300">
          <p className="text-accent-400 font-semibold">&gt; AVAILABLE TERMINAL COMMANDS:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs">
            <div><span className="text-white font-bold">whoami</span> - Print profile identity</div>
            <div><span className="text-white font-bold">cat skills.txt</span> - Core skill matrix</div>
            <div><span className="text-white font-bold">projects</span> - Open-source repos</div>
            <div><span className="text-white font-bold">experience</span> - Career internships</div>
            <div><span className="text-white font-bold">resume</span> - Open verified resume</div>
            <div><span className="text-white font-bold">banner</span> - Show system ASCII banner</div>
            <div><span className="text-white font-bold">github</span> - Launch GitHub profile</div>
            <div><span className="text-white font-bold">linkedin</span> - Launch LinkedIn network</div>
            <div><span className="text-white font-bold">repo</span> - Inspect portfolio repo</div>
            <div><span className="text-white font-bold">date</span> - Current system time</div>
            <div><span className="text-white font-bold">clear</span> - Clear terminal logs</div>
          </div>
          <p className="text-ink-500 text-[11px] pt-1">&gt; Tip: Use Up/Down arrow keys to recall previous commands.</p>
        </div>
      );
    } else if (cmd === 'banner') {
      output = (
        <pre className="text-accent-400 text-[10px] sm:text-xs font-mono leading-tight overflow-x-auto">
{` __  __    _    ____  _   _ _   _   ____  
|  \\/  |  / \\  |  _ \\| | | | | | | / ___| 
| |\\/| | / _ \\ | | | | |_| | | | | \\___ \\ 
| |  | |/ ___ \\| |_| |  _  | |_| |  ___) |
|_|  |_/_/   \\_\\____/|_| |_|\\___/  |____/ 
[ AI & Data Science Engineer · Cybersecurity Specialist ]`}
        </pre>
      );
    } else if (cmd === 'whoami') {
      output = (
        <div className="text-ink-200 space-y-0.5">
          <p className="text-accent-400 font-bold">&gt; UID: 0x36 [Madhu S]</p>
          <p>&gt; Role: AI &amp; Data Science Engineer · Cybersecurity Specialist</p>
          <p>&gt; Host: cyberearth-node-blr01 · Status: Active</p>
        </div>
      );
    } else if (cmd === 'date' || cmd === 'time') {
      const now = new Date();
      output = (
        <span className="text-accent-400 font-mono">
          System Time (UTC): {now.toUTCString()}
        </span>
      );
    } else if (cmd === 'cat skills.txt') {
      output = (
        <>
          <p className="text-ink-200">&gt; AI & Data Science Engineer</p>
          <p className="text-ink-200">&gt; Ethical Hacker</p>
          <p className="text-ink-200">&gt; Game Developer</p>
        </>
      );
    } else if (cmd === 'github') {
      window.open('https://github.com/Madhu-36', '_blank');
      output = <span className="text-accent-400">Opening GitHub profile...</span>;
    } else if (cmd === 'repo' || cmd === 'source') {
      window.open('https://github.com/Madhu-36/My_Portfolio', '_blank');
      output = <span className="text-accent-400">Opening portfolio repository...</span>;
    } else if (cmd === 'linkedin') {
      window.open('https://www.linkedin.com/in/madhu-s-/', '_blank');
      output = <span className="text-accent-400">Opening LinkedIn profile...</span>;
    } else if (cmd === 'resume') {
      window.open(getAssetUrl('/Madhu_S_Resume.pdf?v=2'), '_blank');
      output = <span className="text-accent-400">Opening Madhu S's Resume...</span>;
    } else if (cmd === 'portfolio') {
      output = (
        <ul className="text-ink-200">
          <li><strong>Role:</strong> AI & Data Science Engineer</li>
          <li><strong>Location:</strong> Bengaluru, India</li>
          <li><strong>Focus:</strong> Securing the digital world one byte at a time.</li>
        </ul>
      );
    } else if (cmd === 'about') {
      output = (
        <div className="text-ink-200 space-y-1">
          <p>I'm Madhu S — an aspiring AI & Data Science engineer</p>
          <p>passionate about ethical hacking, game development, and building</p>
          <p>intelligent systems.</p>
        </div>
      );
    } else if (cmd === 'experience') {
      output = (
        <ul className="text-ink-200">
          <li><strong>Ethical Hacker Intern</strong> @ Jutrm Career Academy</li>
          <li><strong>Ethical Hacker Intern</strong> @ ACMEGRADE</li>
        </ul>
      );
    } else if (cmd === 'sudo rm -rf /gravity') {
      output = <span className="text-red-500 font-bold">WARNING: GRAVITY DISABLED... ALL SYSTEMS FAILING...</span>;
      setTimeout(() => {
        document.body.classList.add('gravity-fall');
      }, 1000);
    } else if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    } else if (cmd === 'projects') {
      output = (
        <ul className="text-ink-200 space-y-1">
          <li>- <a href="https://github.com/Madhu-36/Adaptive-firewall-Application-using-AI" target="_blank" className="text-accent-400 hover:underline">Adaptive-firewall-Application-using-AI</a></li>
          <li>- <a href="https://github.com/Madhu-36/DevIgnite" target="_blank" className="text-accent-400 hover:underline">DevIgnite</a> (Developer environment manager)</li>
          <li>- <a href="https://github.com/Madhu-36/Kavach" target="_blank" className="text-accent-400 hover:underline">Kavach</a> (Agentic AI Security)</li>
          <li>- <a href="https://github.com/Madhu-36/CodeShield" target="_blank" className="text-accent-400 hover:underline">CodeShield</a> (AI Security Firewall)</li>
          <li>- <a href="https://github.com/Madhu-36/MXB" target="_blank" className="text-accent-400 hover:underline">MXB</a> (Machine eXecutive Brain)</li>
          <li>- <a href="https://github.com/Madhu-36/Game-Complex" target="_blank" className="text-accent-400 hover:underline">Game-Complex</a></li>
          <li>- <a href="https://github.com/Madhu-36/Packet-way" target="_blank" className="text-accent-400 hover:underline">Packet-way</a></li>
          <li>- <a href="https://github.com/Madhu-36/reflect-open" target="_blank" className="text-accent-400 hover:underline">reflect-open</a></li>
        </ul>
      );
    } else if (cmd.startsWith('sudo')) {
      output = <span className="text-gold-400 font-bold">Access Granted: Welcome Admin. Initiating Override... Just kidding!</span>;
    }

    setCmdHistory((prev) => [...prev, rawCmd]);
    setHistoryIndex(-1);
    setHistory((prev) => [...prev, { command: rawCmd, output }]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const trimmed = input.trim().toLowerCase();
      if (!trimmed) return;
      
      const matches = AVAILABLE_COMMANDS.filter((c) => c.startsWith(trimmed));
      if (matches.length === 1) {
        setInput(matches[0]);
      } else if (matches.length > 1) {
        setHistory((prev) => [
          ...prev,
          {
            command: input,
            output: <span className="text-accent-400 font-mono text-xs">{matches.join('   ')}</span>,
          },
        ]);
      }
      return;
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const nextIndex = historyIndex === -1 ? cmdHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIndex);
      setInput(cmdHistory[nextIndex]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      if (historyIndex < cmdHistory.length - 1) {
        const nextIndex = historyIndex + 1;
        setHistoryIndex(nextIndex);
        setInput(cmdHistory[nextIndex]);
      } else {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(input);
  };

  return (
    <div className="flex flex-col md:flex-row items-stretch gap-4 w-full">
      <div className="terminal border-glow overflow-hidden h-[350px] md:h-[450px] flex flex-col font-mono shadow-2xl flex-grow min-w-0">
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
        <div ref={scrollContainerRef} className="p-5 text-sm leading-relaxed overflow-y-auto flex-grow scroll-smooth" onClick={() => document.getElementById('terminal-input')?.focus({ preventScroll: true })}>
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
              onKeyDown={handleKeyDown}
              placeholder="Type 'help' or command..."
              aria-label="Interactive terminal command input"
              className="bg-transparent border-none outline-none text-ink-200 flex-grow caret-accent-400 placeholder-ink-600"
              autoComplete="off"
              spellCheck="false"
            />
          </form>
        </div>
      </div>
      
      {/* Side Action Buttons */}
      <div className="flex flex-row flex-wrap md:flex-col gap-2 md:gap-3 shrink-0 justify-center">
        <button onClick={() => executeCommand('about')} className="btn-ghost text-xs py-2 md:py-3 px-3 md:px-4 rounded-lg border border-ink-800 hover:border-accent-500/50 flex-grow md:w-full text-center tracking-wide font-mono transition-all duration-300">About</button>
        <button onClick={() => executeCommand('projects')} className="btn-ghost text-xs py-2 md:py-3 px-3 md:px-4 rounded-lg border border-ink-800 hover:border-accent-500/50 flex-grow md:w-full text-center tracking-wide font-mono transition-all duration-300">Projects</button>
        <button onClick={() => executeCommand('experience')} className="btn-ghost text-xs py-2 md:py-3 px-3 md:px-4 rounded-lg border border-ink-800 hover:border-accent-500/50 flex-grow md:w-full text-center tracking-wide font-mono transition-all duration-300">Experience</button>
        <button onClick={() => executeCommand('resume')} className="btn-ghost text-xs py-2 md:py-3 px-3 md:px-4 rounded-lg border border-ink-800 hover:border-accent-500/50 flex-grow md:w-full text-center tracking-wide font-mono transition-all duration-300">Resume</button>
        <button onClick={() => executeCommand('clear')} className="btn-ghost text-xs py-2 md:py-3 px-3 md:px-4 rounded-lg border border-red-900/50 hover:border-red-500/50 text-red-400 hover:text-red-300 flex-grow md:w-full text-center tracking-wide font-mono transition-all duration-300 md:mt-2">Clear</button>
      </div>
    </div>
  );
}
