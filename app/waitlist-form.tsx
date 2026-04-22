'use client';
import { useState } from 'react';

export function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error('signup failed');
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="mx-auto max-w-md rounded-2xl border-2 border-mint bg-mint/10 px-6 py-5 text-center font-semibold text-berry">
        🎉 You&apos;re on the list. We&apos;ll email you when Gogether launches.
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="flex-1 rounded-full border-2 border-bubblegum/20 bg-white px-5 py-3 text-base outline-none transition focus:border-bubblegum"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="group relative overflow-hidden rounded-full bg-gradient-to-br from-bubblegum to-grape px-7 py-3 font-extrabold text-white shadow-xl shadow-bubblegum/40 transition-transform duration-200 ease-out hover:scale-[1.04] active:scale-[0.96] disabled:opacity-60"
      >
        {/* gumball top shine */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-full bg-gradient-to-b from-white/50 to-transparent"
        />
        <span className="relative">{status === 'loading' ? '…' : 'Join waitlist'}</span>
      </button>
    </form>
  );
}
