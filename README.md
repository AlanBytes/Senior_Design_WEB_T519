# T520 — Interactive Automated Kitting and Fulfillment System

Senior design project website, FAMU-FSU College of Engineering, 2026–2027.
Built with Next.js 16, Tailwind CSS 4 and Framer Motion.

## Run locally

**With Docker** (Docker Desktop must be running):

```bash
docker compose up --build
```

Open http://localhost:3000. Stop it with `docker compose down`.

Hot-reload dev server in Docker (edits show up live) at http://localhost:3001:

```bash
docker compose --profile dev up dev
```

**Without Docker** (requires Node 20+):

```bash
npm install
npm run dev
```

## Editing content

All text, names, and links are in **`data/site.ts`**:

| What | Where |
| --- | --- |
| Hero tagline, abstract, project description | `site`, `abstract`, `project` |
| Sponsors (name, job title, LinkedIn, photo) | `sponsors` |
| Team (name, major, LinkedIn, photo) | `team` |
| Downloadable documents | `deliverables` |
| Footer address / copyright | `footer` |

- **Photos:** put images in `public/team/` or `public/sponsors/` (e.g. `jane.jpg`) and set `photo: "/team/jane.jpg"`.
- **Documents:** drop the PDF (or .docx, etc.) into `public/docs/`, then update `file` and `updated` for that entry in `deliverables`.
- **Project render:** replace the placeholder box in `components/Project.tsx` with an `<Image>`.
- **Colors:** brand colors are defined in `app/globals.css` (`--color-brand-red`, `--color-brand-orange`, …).

After changing content, re-run `docker compose up --build` to rebuild the production container.
