import { NextResponse } from 'next/server';

// Served at /.well-known/apple-app-site-association — required for iOS universal links.
// Replace TEAMID with your Apple Developer Team ID once the app is provisioned.
export async function GET() {
  return NextResponse.json({
    applinks: {
      apps: [],
      details: [
        {
          appID: 'TEAMID.com.gogether.app',
          paths: ['/join/*'],
        },
      ],
    },
  });
}
