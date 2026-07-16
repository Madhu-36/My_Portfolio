import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2, Github, Linkedin } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY,
);

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;

    setStatus('loading');
    setErrorMsg('');

    const { error } = await supabase.from('contact_messages').insert({
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    });

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or email me directly.');
      return;
    }

    setStatus('success');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-pad relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 rounded-full bg-accent-500/10 blur-[120px]" />

      <div className="container-px relative z-10 mx-auto max-w-7xl">
        <div
          ref={ref}
          className={`reveal ${visible ? 'is-visible' : ''}`}
        >
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            {/* Left: info */}
            <div>
              <span className="eyebrow mb-6">
                <span className="h-px w-8 bg-accent-400" />
                Contact
              </span>
              <h2 className="heading-lg text-balance">
                Let's build something{' '}
                <span className="text-accent-400">great</span> together.
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-300">
                Have a project in mind, a role to fill, or just want to say hello?
                I'm always open to interesting conversations.
              </p>

              <div className="mt-10 space-y-5">
                <a
                  href="mailto:madhu.s@example.com"
                  className="group flex items-center gap-4 text-ink-200 transition-colors hover:text-white"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink-700 transition-colors group-hover:border-accent-500/50">
                    <Mail size={18} className="text-accent-400" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-ink-500">
                      Email
                    </div>
                    <div className="text-base font-medium">madhu.s@example.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-ink-200">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink-700">
                    <MapPin size={18} className="text-accent-400" />
                  </span>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-ink-500">
                      Location
                    </div>
                    <div className="text-base font-medium">Bengaluru, India</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <a
                  href="https://github.com/Madhu-36"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink-700 text-ink-300 transition-all duration-300 hover:border-accent-500/50 hover:text-accent-400 hover:-translate-y-0.5"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/madhu-s-/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink-700 text-ink-300 transition-all duration-300 hover:border-accent-500/50 hover:text-accent-400 hover:-translate-y-0.5"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            {/* Right: form */}
            <div className="card p-8 sm:p-10">
              {status === 'success' ? (
                <div className="flex h-full min-h-[300px] flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-500/15">
                    <CheckCircle2 size={32} className="text-accent-400" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-white">
                    Message sent!
                  </h3>
                  <p className="mt-3 max-w-sm text-ink-300">
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-ghost mt-6"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-ink-200"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full rounded-xl border border-ink-700 bg-ink-800/50 px-4 py-3 text-base text-white placeholder:text-ink-500 transition-all duration-300 focus:border-accent-500/50 focus:bg-ink-800 focus:outline-none focus:ring-2 focus:ring-accent-500/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-ink-200"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="jane@example.com"
                      className="w-full rounded-xl border border-ink-700 bg-ink-800/50 px-4 py-3 text-base text-white placeholder:text-ink-500 transition-all duration-300 focus:border-accent-500/50 focus:bg-ink-800 focus:outline-none focus:ring-2 focus:ring-accent-500/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-ink-200"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about your project..."
                      className="w-full resize-none rounded-xl border border-ink-700 bg-ink-800/50 px-4 py-3 text-base text-white placeholder:text-ink-500 transition-all duration-300 focus:border-accent-500/50 focus:bg-ink-800 focus:outline-none focus:ring-2 focus:ring-accent-500/20"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-center gap-2.5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                      <AlertCircle size={18} className="shrink-0" />
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send message
                        <Send size={16} />
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
