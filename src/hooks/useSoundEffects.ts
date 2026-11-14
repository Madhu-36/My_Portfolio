import { useCallback, useRef, useState } from 'react';

// Shared singleton AudioContext to prevent memory leaks and main thread audio pauses
let sharedAudioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  try {
    if (!sharedAudioCtx) {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtxClass) {
        sharedAudioCtx = new AudioCtxClass();
      }
    }
    if (sharedAudioCtx && sharedAudioCtx.state === 'suspended') {
      sharedAudioCtx.resume().catch(() => {});
    }
    return sharedAudioCtx;
  } catch {
    return null;
  }
}

export const useSoundEffects = () => {
  const lastHoverTime = useRef(0);
  const [muted, setMuted] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('portfolio-audio-muted') === 'true';
    }
    return false;
  });

  const toggleMute = useCallback(() => {
    setMuted((prev) => {
      const next = !prev;
      if (typeof window !== 'undefined') {
        localStorage.setItem('portfolio-audio-muted', String(next));
      }
      return next;
    });
  }, []);

  const playHover = useCallback(() => {
    if (muted) return;
    const now = performance.now();
    // Throttle hover sounds so rapid mouse movements don't flood the audio thread
    if (now - lastHoverTime.current < 90) return;
    lastHoverTime.current = now;

    try {
      const ctx = getAudioContext();
      if (!ctx || ctx.state !== 'running') return;

      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.04);

      gainNode.gain.setValueAtTime(0, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.03, ctx.currentTime + 0.01);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.04);
    } catch {
      // Ignore if audio policy prevents auto-play
    }
  }, [muted]);

  const playClick = useCallback(() => {
    if (muted) return;
    try {
      const ctx = getAudioContext();
      if (!ctx || ctx.state !== 'running') return;

      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();

      osc.type = 'square';
      osc.frequency.setValueAtTime(160, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(60, ctx.currentTime + 0.08);

      gainNode.gain.setValueAtTime(0, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(0.06, ctx.currentTime + 0.02);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

      osc.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } catch {
      // Ignore
    }
  }, [muted]);

  return { playHover, playClick, muted, toggleMute };
};
