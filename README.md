# AI Integration Manager

Landing page for the **AI Integration Manager** service — an AI expert who joins your organization, builds and ships 2–3 working solutions within 60 days. Execution, not consulting.

A single-page, Hebrew (RTL) landing page focused on speed, accessibility, and clean design.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite 5** — dev server and build tooling
- **Tailwind CSS 3** + **shadcn/ui** (Radix UI)
- **React Router** — routing
- **TanStack Query** — async state management
- **Vitest** + **Testing Library** — testing

## Getting Started

Requires [Node.js](https://nodejs.org/) (v18+) and npm.

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:8080)
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Build the production bundle to `dist` |
| `npm run build:dev` | Build in development mode |
| `npm run preview` | Preview the local production build |
| `npm run lint` | Lint the code with ESLint |
| `npm run test` | Run the test suite (Vitest) |
| `npm run test:watch` | Run tests in watch mode |

## Project Structure

```
src/
├── App.tsx          # Root component and routing setup
├── main.tsx         # Entry point
├── index.css        # Global styles and design tokens
├── pages/
│   ├── Index.tsx    # Main landing page
│   └── NotFound.tsx # 404 page
├── components/
│   ├── NavLink.tsx
│   └── ui/          # shadcn/ui components
├── hooks/
├── lib/
└── test/
```

## License

Private project. All rights reserved.
