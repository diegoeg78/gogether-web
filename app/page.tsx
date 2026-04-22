import { WaitlistForm } from './waitlist-form';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
        <div
          className="absolute inset-0 -z-10 opacity-30"
          style={{
            background:
              'radial-gradient(circle at 20% 20%, #FF4FB8 0%, transparent 40%), radial-gradient(circle at 80% 30%, #3DD9FF 0%, transparent 40%), radial-gradient(circle at 50% 90%, #B07BFF 0%, transparent 40%)',
          }}
        />
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-bubblegum/20 bg-white/60 px-4 py-1.5 text-sm font-semibold text-bubblegum backdrop-blur">
            <span>🎈</span> Coming soon to iOS + Android
          </div>
          <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-7xl">
            Travel together.
            <br />
            <span className="bg-gradient-to-r from-bubblegum via-grape to-candy-cyan bg-clip-text text-transparent">
              Pay when it&apos;s real.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-berry/70 sm:text-xl">
            Plan group trips with friends, commit funds without paying upfront, vote on
            AI-picked itineraries, and only get charged when the trip is confirmed.
          </p>
          <div className="mt-10">
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-black sm:text-4xl">How it works</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { emoji: '👯', title: 'Form a crew', body: 'Create a group, invite your friends with a code.' },
              { emoji: '💳', title: 'Commit, don\'t pay', body: 'Everyone pledges an amount. Card saved, not charged.' },
              { emoji: '🤖', title: 'AI picks trips', body: 'We suggest 3 itineraries that fit your vibe + budget.' },
              { emoji: '✈️', title: 'Vote & go', body: 'Group picks one. Cards charged. Trip locked in.' },
            ].map((step, i) => (
              <div
                key={i}
                className="rounded-3xl border-2 border-bubblegum/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-4xl">{step.emoji}</div>
                <div className="mt-4 text-lg font-bold">{step.title}</div>
                <p className="mt-2 text-sm text-berry/60">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-bubblegum to-grape p-10 text-center text-white shadow-xl sm:p-14">
          <div className="text-4xl">🤝</div>
          <h3 className="mt-4 text-2xl font-black sm:text-3xl">
            No trip = no charge. Ever.
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-white/90">
            Cards are stored by Stripe — not us. You&apos;re only charged when your whole group
            locks in the trip. If it falls through, nobody pays a cent.
          </p>
        </div>
      </section>

      <footer className="px-6 py-12 text-center text-sm text-berry/50">
        <p>© {new Date().getFullYear()} Gogether</p>
      </footer>
    </main>
  );
}
