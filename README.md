# CarMarket

Nordic car reseller marketplace for independent dealers in Denmark, Sweden, Norway, and Finland.

## Tech Stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS 4** + shadcn/ui
- **Prisma** ORM with **PostgreSQL** (Supabase)
- **NextAuth.js v5** (email magic link + Google OAuth)
- **Vitest** unit tests
- **GitHub Actions** CI/CD → **Vercel** deployment

## Prerequisites

- Node.js 22+
- pnpm 10+
- A Supabase project (EU/Stockholm region) — [supabase.com](https://supabase.com)

## Local Setup

### 1. Clone and install

```bash
git clone https://github.com/benjamingronlund/car-marketplace.git
cd car-marketplace
pnpm install
```

### 2. Configure environment

```bash
cp .env.example .env.local
```

Fill in the required values in `.env.local`:

| Variable | Where to get it |
|---|---|
| `DATABASE_URL` | Supabase → Settings → Database → Connection string (port 6543, transaction mode) |
| `DIRECT_URL` | Supabase → Settings → Database → Connection string (port 5432, session mode) |
| `AUTH_SECRET` | Run `openssl rand -base64 32` |
| `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` | [Google Cloud Console](https://console.cloud.google.com/) |
| `EMAIL_SERVER` | Any SMTP provider (e.g. Mailtrap for dev) |

### 3. Run database migrations

```bash
pnpm db:migrate
```

### 4. Start the dev server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script | Description |
|---|---|
| `pnpm dev` | Start dev server (Turbopack) |
| `pnpm build` | Production build |
| `pnpm lint` | ESLint + type-check |
| `pnpm test` | Vitest (watch mode) |
| `pnpm test:run` | Vitest (single run, used in CI) |
| `pnpm db:migrate` | Run Prisma migrations (dev) |
| `pnpm db:migrate:deploy` | Run Prisma migrations (production) |
| `pnpm db:studio` | Open Prisma Studio |

## Project Structure

```
car-marketplace/
├── app/
│   ├── (public)/listings/   # Browse listings
│   ├── (auth)/sign-in/      # Authentication
│   └── api/auth/            # NextAuth handlers
├── lib/
│   ├── db/client.ts         # Prisma client singleton
│   └── auth/                # NextAuth config
├── prisma/
│   ├── schema.prisma        # Data model
│   └── migrations/
├── tests/
│   └── unit/
└── .github/workflows/
    ├── ci.yml               # PR: lint + test
    └── deploy.yml           # main: migrate + deploy to Vercel
```

## Environments

| Environment | Branch | URL |
|---|---|---|
| Preview | PR branches | Vercel preview URL |
| Staging | `main` | `staging.carmkt.io` |
| Production | Tagged releases | `carmkt.io` |

## Deployment

The app deploys automatically via GitHub Actions + Vercel. Required GitHub secrets:

- `DATABASE_URL`, `DIRECT_URL`
- `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`
- `AUTH_SECRET`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`
- `EMAIL_SERVER`, `EMAIL_FROM`
