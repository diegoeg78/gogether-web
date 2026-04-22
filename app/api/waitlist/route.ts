import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { email } = (await req.json()) as { email?: string };
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }

  // TODO: wire to Supabase / Resend / Loops when SQL layer is ready
  console.log('[waitlist]', email);

  return NextResponse.json({ ok: true });
}
