# gogether-web

Landing page + universal-link host for [Gogether](https://gogether.app) — the travel group app where friends plan trips together and only pay when the trip is confirmed.

## Stack
Next.js 15 · Tailwind CSS v4 · TypeScript · Vercel

## Dev
```bash
npm install
npm run dev
```

## Universal links
`/.well-known/apple-app-site-association` is served by [app/.well-known/apple-app-site-association/route.ts](app/.well-known/apple-app-site-association/route.ts). Update `TEAMID` once the iOS app is provisioned.
