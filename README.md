# Portfolio

Source for my developer portfolio site — built with Vite, React, TypeScript,
and Tailwind CSS. See [`../PORTFOLIO_GUIDE.md`](../PORTFOLIO_GUIDE.md) for the
full plan this was built from (project copy, hosting steps, launch checklist).

## Editing content

Everything on the page — name, tagline, project copy, links, skills — comes
from a single file: [`src/data/site.ts`](src/data/site.ts). Edit that file to
update the site; the components just render whatever's in there.

Still to fill in there:
- `profile.linkedin` — add your LinkedIn URL
- `profile.resumeUrl` — add a link to a hosted resume PDF
- confirm `profile.name` is how you want to be listed

## Adding real screenshots

Project cards currently use gradient placeholders. To swap in a real
screenshot for a project, drop an image at `public/screenshots/<slug>.png`
(slugs are in `src/data/site.ts`) and update that project's `ProjectCard`
usage to render an `<img>` instead of the gradient div — see
`src/components/ProjectCard.tsx`.

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run preview  # preview the production build locally
```

## Deploying

A GitHub Actions workflow at `.github/workflows/deploy.yml` builds and
deploys `dist/` to GitHub Pages automatically on every push to `main`. In the
repo's Settings → Pages, set Source to "GitHub Actions."

`vite.config.ts` sets `base: '/portfolio/'` to match a repo named
`portfolio` (site serves at `your-username.github.io/portfolio/`). If you
rename the repo, or use a `your-username.github.io` repo instead (serves at
the bare domain), update `base` to match — see
[`../PORTFOLIO_GUIDE.md`](../PORTFOLIO_GUIDE.md) §6 for details.
