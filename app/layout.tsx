import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Gogether — Travel together. Pay when the trip is real.',
  description:
    'Plan group trips with friends, commit funds without paying upfront, vote on AI-suggested itineraries, and only get charged when the trip is confirmed.',
  openGraph: {
    title: 'Gogether',
    description: 'Travel together. Pay when the trip is real.',
    url: 'https://gogether.app',
    siteName: 'Gogether',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
