import { WaitlistForm } from './waitlist-form';

const features = [
  {
    emoji: '💰',
    title: 'Real deposits, your pace',
    body: 'Daily, weekly, monthly — auto-pulled from your bank into an FDIC-insured trip fund. No lump-sum shock when it\u2019s time to book.',
  },
  {
    emoji: '🤖',
    title: 'AI trip planner',
    body: 'A two-minute interview — vibe, dates, budget — and Claude pitches three trips tuned to your crew and current fund.',
  },
  {
    emoji: '🗳️',
    title: 'Group vote',
    body: 'Everyone picks their favorite. Real-time bars, winner locks in when the last vote lands.',
  },
  {
    emoji: '💬',
    title: 'Crew chat',
    body: 'Built-in group chat for the planning chaos. Paste a link, get a preview card. No more scattered Slack DMs.',
  },
  {
    emoji: '🎁',
    title: 'Gift a payment',
    body: "Cover a friend's contribution for a birthday, a bad month, or just because. Credits their tally, shows up in the feed.",
  },
  {
    emoji: '🏆',
    title: 'Leaderboard + streaks',
    body: 'See who pulled their weight. Consecutive-day streaks light up with 🔥 to keep the crew motivated.',
  },
  {
    emoji: '⏰',
    title: 'Countdown to takeoff',
    body: 'Live countdown once the trip is locked. One tap opens Expedia, Booking, Kayak, or Skyscanner.',
  },
  {
    emoji: '🎟️',
    title: 'AI promo hunter',
    body: 'Claude sniffs out active discount codes for your destination. Tap to copy, tap to open the vendor.',
  },
  {
    emoji: '⚖️',
    title: 'Surplus + shortfall settle',
    body: 'Fund bigger than the trip? Rollover, refund, or upgrade. Short? Even top-up, gift route, or cancel — your call.',
  },
];

const steps = [
  { num: '01', emoji: '👯', title: 'Form a crew', body: 'Create a group, give it an emoji and a goal, share a one-tap invite link.' },
  { num: '02', emoji: '🏦', title: 'Save together', body: 'Each member picks their cadence. Real deposits auto-pull into your own FDIC-insured trip fund. Balance is yours, refundable anytime.' },
  { num: '03', emoji: '🧠', title: 'AI picks trips', body: 'When you\u2019re ready, the planner pitches three options that fit the fund and the vibe.' },
  { num: '04', emoji: '💳', title: 'Book when ready', body: 'Vote, lock in, each card is charged its share once. Hand off to the booking site you already trust.' },
];

const faqs = [
  {
    q: 'Where does my money actually go?',
    a: "Each member gets their own FDIC-insured trip fund held at our sponsor bank (Evolve Bank & Trust). Weekly deposits auto-pull from your checking into that fund. You can see the balance grow in real time, and withdraw to your bank anytime.",
  },
  {
    q: 'Is my card / bank charged every week?',
    a: 'Yes — real deposits. That\u2019s the whole point. If the crew deposits weekly, you actually build a balance. When the trip locks in, your share is moved from your fund to the booking. No lump-sum surprise.',
  },
  {
    q: 'What if I back out or the trip gets cancelled?',
    a: 'Full refund, no fees. Hit "back out" in the app and your balance wires back to your bank in 3–5 business days. Your money is yours until the moment the crew books.',
  },
  {
    q: 'What if someone flakes?',
    a: 'Their balance is their own — they can withdraw it and leave the crew. The rest of the crew sees the shortfall instantly and can cover it, gift a payment, or cancel the trip. No drama, no chasing Venmos.',
  },
  {
    q: 'Do you hold the money?',
    a: "No — we don\u2019t custody funds. A regulated FDIC-insured bank does, under your name. We\u2019re the app that makes saving as a crew feel like one thing instead of ten Venmo threads.",
  },
  {
    q: 'Where does the booking happen?',
    a: 'Wherever you want. We hand you off to Expedia, Booking.com, Kayak, Skyscanner — whichever deal is best the day you book. We just make sure the crew has the money ready.',
  },
  {
    q: 'How does the AI know what we want?',
    a: "A 2-minute group interview: dream vibe, travel window, hard-nos, budget ceiling. Claude picks three trips that match the crew\u2019s answers and current fund balance.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b border-border/40 bg-bg/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">✈️</span>
            <span className="text-lg font-black tracking-tight">Stay2gether</span>
          </div>
          <div className="hidden items-center gap-8 text-sm font-semibold text-ink-muted sm:flex">
            <a href="#features" className="hover:text-ink">Features</a>
            <a href="#how" className="hover:text-ink">How it works</a>
            <a href="#faq" className="hover:text-ink">FAQ</a>
            <a href="#waitlist" className="rounded-full bg-lime px-4 py-1.5 text-bg transition hover:brightness-110">Join waitlist</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-24 pb-28 sm:pt-32 sm:pb-32">
        <div
          className="absolute inset-0 -z-10 opacity-60"
          style={{
            background:
              'radial-gradient(circle at 20% 20%, #A855F7 0%, transparent 45%), radial-gradient(circle at 80% 25%, #CCFF00 0%, transparent 35%), radial-gradient(circle at 50% 95%, #22D3EE 0%, transparent 45%)',
          }}
        />
        <div className="absolute inset-0 -z-10 bg-bg/60" />
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime/30 bg-surface/60 px-4 py-1.5 text-sm font-semibold text-lime backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-lime shadow-[0_0_12px_#CCFF00]" />
            Coming soon to iOS + Android
          </div>
          <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-7xl">
            Travel together.
            <br />
            <span className="bg-gradient-to-r from-lime via-cyan to-grape bg-clip-text text-transparent">
              AI-picked trips.
            </span>
            <br />
            Save as a crew.
            <br />
            <span className="bg-gradient-to-r from-grape to-lime bg-clip-text text-transparent">
              Book when you&apos;re ready.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-ink-muted sm:text-lg">
            A group savings club for travel. Real weekly deposits into an FDIC-insured
            trip fund — watch it grow, refund anytime, book what the crew can actually afford.
          </p>
          <div id="waitlist" className="mt-10">
            <WaitlistForm />
          </div>
          <p className="mt-4 text-xs text-ink-muted">No spam. One email when we launch.</p>
        </div>
      </section>

      {/* Stats band */}
      <section className="border-y border-border/60 bg-surface/40 px-6 py-10">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 text-center sm:grid-cols-4">
          {[
            { n: 'FDIC', l: 'insured to $250K' },
            { n: '3–5 days', l: 'refund to bank' },
            { n: '$0', l: 'fees or penalties' },
            { n: '2 min', l: 'to plan a trip' },
          ].map((s) => (
            <div key={s.l}>
              <div className="text-3xl font-black text-lime sm:text-4xl">{s.n}</div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-ink-muted">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-grape">How it works</div>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">Save as a group. Book as a group.</h2>
            <p className="mx-auto mt-3 max-w-2xl text-ink-muted">
              Four steps from &ldquo;we should travel together&rdquo; to &ldquo;we&apos;re on the plane.&rdquo;
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.num}
                className="group relative overflow-hidden rounded-3xl border border-border bg-surface p-6 transition duration-200 ease-out hover:-translate-y-1 hover:border-lime/40 hover:shadow-[0_0_40px_-12px_#CCFF00]"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-1/3 rounded-t-3xl bg-gradient-to-b from-grape/10 to-transparent"
                />
                <div className="flex items-center justify-between">
                  <div className="text-4xl">{step.emoji}</div>
                  <div className="text-xs font-black text-ink-muted">{step.num}</div>
                </div>
                <div className="mt-4 text-lg font-bold text-ink">{step.title}</div>
                <p className="mt-2 text-sm text-ink-muted">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-lime">Everything in the app</div>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">Built for the chaos of group travel.</h2>
            <p className="mx-auto mt-3 max-w-2xl text-ink-muted">
              From the first &ldquo;we should go somewhere&rdquo; to the countdown on the airport floor.
            </p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-border bg-surface p-6 transition hover:-translate-y-0.5 hover:border-grape/50 hover:shadow-[0_0_30px_-10px_#A855F7]"
              >
                <div className="text-3xl">{f.emoji}</div>
                <div className="mt-3 text-base font-bold text-ink">{f.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mock screenshot / dashboard preview */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-cyan">Live from the app</div>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">Your crew&apos;s fund, at a glance.</h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {/* Group card mock */}
            <div className="rounded-3xl border border-border bg-surface p-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl">🏝️</div>
                  <div className="mt-2 text-xl font-black">Tulum Crew</div>
                  <div className="text-xs text-ink-muted">📍 Mexico · 6 members</div>
                </div>
                <div className="rounded-full bg-lime/15 px-3 py-1 text-xs font-bold text-lime">on track</div>
              </div>
              <div className="mt-6 flex items-end justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-ink-muted">Committed</div>
                  <div className="text-3xl font-black text-grape">$3,420</div>
                </div>
                <div className="text-right">
                  <div className="text-xs font-bold uppercase tracking-wider text-ink-muted">Goal</div>
                  <div className="text-3xl font-black">$5,400</div>
                </div>
              </div>
              <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-border">
                <div className="h-full w-[63%] bg-gradient-to-r from-lime to-cyan" />
              </div>
              <div className="mt-2 text-xs font-bold text-ink-muted">63% of fund goal · pay when your crew books ✈️</div>
            </div>

            {/* Leaderboard mock */}
            <div className="rounded-3xl border border-border bg-surface p-6">
              <div className="text-sm font-black uppercase tracking-wider text-ink-muted">🏆 Leaderboard</div>
              <div className="mt-4 space-y-2">
                {[
                  { r: 1, n: 'Maya', s: 14, a: 820 },
                  { r: 2, n: 'Diego', s: 9, a: 710 },
                  { r: 3, n: 'Jordan', s: 12, a: 640 },
                  { r: 4, n: 'Sam', s: 3, a: 520 },
                  { r: 5, n: 'Priya', s: 0, a: 380 },
                ].map((row) => (
                  <div key={row.r} className="flex items-center gap-3 rounded-xl border border-border bg-surface-hi px-4 py-2.5">
                    <div className="w-6 text-sm font-black text-lime">#{row.r}</div>
                    <div className="flex-1 text-sm font-bold">{row.n}</div>
                    {row.s > 1 && <div className="text-xs font-black text-lime">🔥 {row.s}</div>}
                    <div className="text-sm font-black">${row.a}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Poll mock */}
            <div className="rounded-3xl border border-border bg-surface p-6">
              <div className="text-sm font-black uppercase tracking-wider text-ink-muted">🗳️ Group vote · 4/6 in</div>
              <div className="mt-4 space-y-3">
                {[
                  { e: '🏝️', t: 'Tulum beach week', pct: 50, v: 3 },
                  { e: '🗼', t: 'Tokyo neon run', pct: 33, v: 2 },
                  { e: '🏔️', t: 'Patagonia trek', pct: 17, v: 1 },
                ].map((p) => (
                  <div key={p.t}>
                    <div className="flex items-center justify-between text-sm">
                      <div className="font-bold">{p.e} {p.t}</div>
                      <div className="text-ink-muted">{p.v} vote{p.v !== 1 && 's'}</div>
                    </div>
                    <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-border">
                      <div className="h-full bg-gradient-to-r from-grape to-cyan" style={{ width: `${p.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Promo mock */}
            <div className="rounded-3xl border border-border bg-surface p-6">
              <div className="text-sm font-black uppercase tracking-wider text-ink-muted">🎟️ AI promo hunter</div>
              <div className="mt-4 rounded-2xl border border-border bg-surface-hi p-5">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-black uppercase tracking-wider text-ink-muted">Booking.com</div>
                  <div className="rounded-full bg-lime/20 px-2 py-0.5 text-[10px] font-black uppercase">High</div>
                </div>
                <div className="mt-2 text-2xl font-black tracking-[0.2em] text-lime">TULUM15</div>
                <div className="mt-1 text-sm text-ink-muted">15% off beachfront stays · expires in 4 days</div>
              </div>
              <div className="mt-3 rounded-2xl border border-border bg-surface-hi p-5">
                <div className="flex items-center justify-between">
                  <div className="text-xs font-black uppercase tracking-wider text-ink-muted">Expedia</div>
                  <div className="rounded-full bg-cyan/20 px-2 py-0.5 text-[10px] font-black uppercase">Medium</div>
                </div>
                <div className="mt-2 text-2xl font-black tracking-[0.2em] text-lime">GROUP2026</div>
                <div className="mt-1 text-sm text-ink-muted">$75 off bundles of 4+ travelers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="px-6 py-20">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-lime/30 bg-surface p-10 text-center shadow-[0_0_80px_-20px_#A855F7] sm:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                'radial-gradient(circle at 30% 0%, #A855F7 0%, transparent 50%), radial-gradient(circle at 70% 100%, #CCFF00 0%, transparent 50%)',
            }}
          />
          <div className="relative text-4xl">💸</div>
          <h3 className="relative mt-4 text-2xl font-black sm:text-3xl">
            Real savings. FDIC-insured. Refundable.
          </h3>
          <p className="relative mx-auto mt-3 max-w-xl text-ink-muted">
            Each member&apos;s trip fund lives at a regulated sponsor bank (Evolve Bank &amp; Trust),
            FDIC-insured to $250K. We don&apos;t hold your money — the bank does, in your name.
            Back out anytime for a full refund in 3–5 business days.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-magenta">FAQ</div>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">Questions people ask.</h2>
          </div>
          <div className="mt-12 space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl border border-border bg-surface p-6 transition hover:border-grape/40">
                <summary className="flex cursor-pointer items-center justify-between text-base font-bold text-ink">
                  {f.q}
                  <span className="text-lime transition group-open:rotate-45">＋</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-24">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-grape/40 bg-surface p-12 text-center sm:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-50"
            style={{
              background:
                'radial-gradient(circle at 30% 50%, #A855F7 0%, transparent 40%), radial-gradient(circle at 80% 50%, #CCFF00 0%, transparent 40%)',
            }}
          />
          <h3 className="relative text-3xl font-black sm:text-5xl">Ready to travel together?</h3>
          <p className="relative mx-auto mt-4 max-w-xl text-ink-muted">
            We&apos;re opening the waitlist ahead of launch. Early crews get priority access and a lifetime discount.
          </p>
          <div className="relative mt-8">
            <WaitlistForm />
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60 px-6 py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm text-ink-muted sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="text-lg">✈️</span>
            <span className="font-black text-ink">Stay2gether</span>
          </div>
          <div className="flex gap-6">
            <a href="#features" className="hover:text-ink">Features</a>
            <a href="#how" className="hover:text-ink">How it works</a>
            <a href="#faq" className="hover:text-ink">FAQ</a>
          </div>
          <p>© {new Date().getFullYear()} Stay2gether</p>
        </div>
      </footer>
    </main>
  );
}
