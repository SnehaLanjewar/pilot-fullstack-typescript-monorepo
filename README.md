# pilot-fullstack-typescript-monorepo

A basic full-stack TypeScript monorepo with:

- `packages/web`: React + Vite app
- `packages/api`: Node.js + Express API
- `packages/shared`: shared TypeScript types/constants

## Requirements

- Node.js 20+
- npm 10+

## Install

```bash
npm install
```

## Run in development

```bash
npm run dev
```

- Web app: `http://localhost:5173`
- API health endpoint: `http://localhost:3000/health`

## Useful scripts

- `npm run dev:web`
- `npm run dev:api`
- `npm run typecheck`
- `npm run build`