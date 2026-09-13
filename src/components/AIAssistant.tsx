import { useState, useRef, useEffect } from 'react';
import { Bot, X, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type Message = {
  id: string;
  role: 'user' | 'assistant';
  content: string;
};

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hi! I am Madhu's AI assistant. Ask me anything about his skills, projects, or background.",
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { id: Date.now().toString(), role: 'user', content: userMsg }]);
    setIsTyping(true);

    // Mock AI response logic
    setTimeout(() => {
      let botResponse = "I'm still learning about that! You can reach out to Madhu directly via the contact form.";
      const lower = userMsg.toLowerCase();
      
      if (lower.includes('rust') || lower.includes('devignite')) {
        botResponse = "Madhu built DevIgnite, a cross-platform developer environment manager in Rust! He loves system programming and performance optimization.";
      } else if (lower.includes('game') || lower.includes('unity')) {
        botResponse = "Madhu creates games using JavaScript and engines like Unity. Check out 'Game Complex' in the projects section!";
      } else if (lower.includes('ai') || lower.includes('machine learning')) {
        botResponse = "Madhu is an AI Engineer who has built adaptive firewalls using AI and is passionate about neural networks.";
      } else if (lower.includes('hire') || lower.includes('contact') || lower.includes('resume')) {
        botResponse = "You can contact Madhu via the Contact section below, or connect with him on LinkedIn!";
      }

      setMessages((prev) => [...prev, { id: Date.now().toString(), role: 'assistant', content: botResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-80 sm:w-96 rounded-2xl border border-ink-700 bg-ink-900/95 shadow-2xl backdrop-blur-xl overflow-hidden flex flex-col h-[400px]"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-ink-800 bg-ink-950 px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-500/20 text-accent-400">
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Madhu's AI</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs text-ink-400">Online</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-lg p-1.5 text-ink-400 hover:bg-ink-800 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((m) => (
                <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      m.role === 'user'
                        ? 'bg-accent-600 text-white rounded-br-sm'
                        : 'bg-ink-800 text-ink-200 rounded-bl-sm'
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-ink-800 rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-ink-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="h-1.5 w-1.5 rounded-full bg-ink-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="h-1.5 w-1.5 rounded-full bg-ink-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className="border-t border-ink-800 p-3 bg-ink-950">
              <div className="flex items-center gap-2 rounded-xl bg-ink-800/50 pr-1 border border-ink-700 focus-within:border-accent-500/50 focus-within:bg-ink-800 transition-all">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question..."
                  className="flex-1 bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-ink-500 outline-none"
                />
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-500 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent-400 transition-colors"
                >
                  <Send size={14} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-600 text-white shadow-lg shadow-accent-500/25 transition-colors hover:bg-accent-500 focus:outline-none focus:ring-4 focus:ring-accent-500/20"
      >
        {isOpen ? <X size={24} /> : <Bot size={24} />}
      </motion.button>
    </div>
  );
}
