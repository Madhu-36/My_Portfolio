import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Loader2, Github, Linkedin, FileText } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;

    setStatus('loading');

    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n---\nSender: ${form.name}\nEmail: ${form.email}`
    );

    // Direct mailto link fallback
    window.location.href = `mailto:madhu.s.3606@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 600);
  };

  return (
    <section id="contact" className="section-pad relative border-t border-ink-800/60">
      <div className="container-px mx-auto max-w-7xl">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''}`}
        >
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
            {/* Left: Direct Contact Information */}
            <div>
              <span className="eyebrow mb-3">
                <span className="h-px w-6 bg-accent-400" />
                Get in Touch
              </span>
              <h2 className="heading-lg text-balance">
                Let&apos;s start a conversation.
              </h2>
              <p className="mt-4 text-sm text-ink-300 leading-relaxed max-w-md">
                Whether you have an engineering role, a security audit inquiry, an open-source collaboration,
                or just want to connect, feel free to reach out.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href="mailto:madhu.s.3606@gmail.com"
                  className="flex items-center gap-3.5 text-ink-200 hover:text-white transition-colors group p-3 rounded-lg border border-ink-800/80 bg-ink-900/40 hover:border-ink-700"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-ink-800/80 text-accent-400">
                    <Mail size={17} />
                  </span>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-ink-400">
                      Direct Email
                    </div>
                    <div className="text-sm font-medium">madhu.s.3606@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 text-ink-200 p-3 rounded-lg border border-ink-800/80 bg-ink-900/40">
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-ink-800/80 text-accent-400">
                    <MapPin size={17} />
                  </span>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-ink-400">
                      Location
                    </div>
                    <div className="text-sm font-medium">Bengaluru, Karnataka, India</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-ink-800/70 flex items-center gap-3">
                <a
                  href="https://github.com/Madhu-36"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary !py-2 !px-3.5 !text-xs font-mono"
                >
                  <Github size={15} />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/madhu-s-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary !py-2 !px-3.5 !text-xs font-mono"
                >
                  <Linkedin size={15} />
                  LinkedIn
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary !py-2 !px-3.5 !text-xs font-mono"
                >
                  <FileText size={15} />
                  Resume
                </a>
              </div>
            </div>

            {/* Right: Message Form */}
            <div className="card p-6 sm:p-8 border-ink-800/80 bg-ink-900/60">
              {status === 'success' ? (
                <div className="flex h-full min-h-[300px] flex-col items-center justify-center text-center p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-white">
                    Email Client Opened
                  </h3>
                  <p className="mt-2 max-w-sm text-xs text-ink-300">
                    Your message draft has been prepared. If your email client didn&apos;t open automatically,
                    send directly to <span className="text-white font-mono">madhu.s.3606@gmail.com</span>.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-secondary mt-6 !text-xs"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono uppercase tracking-wider text-ink-400 mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full rounded-lg border border-ink-800 bg-ink-950/80 px-3.5 py-2.5 text-sm text-white placeholder-ink-500 outline-none transition-colors focus:border-accent-400 focus:ring-1 focus:ring-accent-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono uppercase tracking-wider text-ink-400 mb-1.5"
                    >
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full rounded-lg border border-ink-800 bg-ink-950/80 px-3.5 py-2.5 text-sm text-white placeholder-ink-500 outline-none transition-colors focus:border-accent-400 focus:ring-1 focus:ring-accent-400"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono uppercase tracking-wider text-ink-400 mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Hi Madhu, I'd like to discuss a potential engineering opportunity..."
                      className="w-full rounded-lg border border-ink-800 bg-ink-950/80 px-3.5 py-2.5 text-sm text-white placeholder-ink-500 outline-none transition-colors focus:border-accent-400 focus:ring-1 focus:ring-accent-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary w-full !py-2.5 !text-sm mt-2"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Preparing email...
                      </>
                    ) : (
                      <>
                        <Send size={15} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
