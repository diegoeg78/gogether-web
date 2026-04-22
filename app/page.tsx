import { WaitlistForm } from './waitlist-form';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
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
            A group savings club for travel. Schedule contributions, watch the fund grow,
            and see exactly which trips your crew can afford right now.
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
              { emoji: '👯', title: 'Form a crew', body: 'Create a group and invite friends with a code.' },
              { emoji: '🏦', title: 'Save as a group', body: 'Daily, weekly, or monthly deposits into one fund.' },
              { emoji: '🤖', title: 'AI picks trips', body: 'Itineraries tuned to your crew&rsquo;s vibe and current balance.' },
              { emoji: '✈️', title: 'Book externally', body: 'Hand off to Expedia, Booking, Kayak — your money, your choice.' },
            ].map((step, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-3xl border border-border bg-surface p-6 transition duration-200 ease-out hover:-translate-y-1 hover:border-lime/40 hover:shadow-[0_0_40px_-12px_#CCFF00]"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 top-0 h-1/3 rounded-t-3xl bg-gradient-to-b from-grape/10 to-transparent"
                />
                <div className="text-4xl">{step.emoji}</div>
                <div className="mt-4 text-lg font-bold text-ink">{step.title}</div>
                <p className="mt-2 text-sm text-ink-muted" dangerouslySetInnerHTML={{ __html: step.body }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="px-6 py-16">
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
            Your money. Your fund. Your call.
          </h3>
          <p className="relative mx-auto mt-3 max-w-xl text-ink-muted">
            Stay2gether is a savings club — we don&apos;t process bookings. Contributions
            stack in your group fund until the crew decides where to go, then you book
            externally on the sites you already trust.
          </p>
        </div>
      </section>

      <footer className="px-6 py-12 text-center text-sm text-ink-muted">
        <p>© {new Date().getFullYear()} Stay2gether</p>
      </footer>
    </main>
  );
}
