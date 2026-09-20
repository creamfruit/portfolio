# Chong Li Sean — Portfolio

A Next.js portfolio site: Home, Projects (Runeted + Re:Connect SG),
Design (interactive Figma component viewer), Photography, Contact.
Dark mode, scroll animations, and a live in-browser balance-simulation
demo for Runeted. Free to host on GitHub Pages.

## Edit your content

Everything text-based — your bio, skills, project write-ups, stats — lives
in one file: `lib/data.js`. Change that file, nothing else, for most
updates.

## Run it locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Add your real images

Right now the Runeted screenshot block, the Figma frame gallery, and the
whole Photography page are placeholders (dashed boxes). To add real
images:

1. Drop image files into `public/images/...` (make subfolders however you
   like, e.g. `public/images/runeted/`, `public/images/photography/`).
2. In the relevant page (`app/projects/runeted/page.jsx`,
   `app/design/page.jsx`, `app/photography/page.jsx`), replace the dashed
   placeholder `<div>` with:

   ```jsx
   import Image from 'next/image';
   // ...
   <Image
     src="/images/runeted/screenshot.png"
     alt="Runeted gameplay"
     width={1200}
     height={700}
     className="rounded-xl border border-line dark:border-linedark"
   />
   ```

To embed your real Figma file instead of the interactive recreation on the
Design page: in Figma, turn on link-sharing for the file, copy the link,
then see the comment at the bottom of
`components/FigmaComponentViewer.jsx` for the exact `<iframe>` to swap in.

## Deploy to GitHub Pages — free, and it stays live

Two ways to name the repo — pick one:

- **`portfolio`** (or anything) → your site lives at
  `https://YOUR_USERNAME.github.io/portfolio/`.
- **`YOUR_USERNAME.github.io`** exactly (e.g. `creamfruit.github.io`) →
  GitHub treats this name specially and serves your site at the bare
  root, `https://YOUR_USERNAME.github.io` — no path, much easier to say
  or type out loud. **Recommended** for a resume/portfolio link. The
  config already handles both automatically, no code changes needed
  either way.

1. Create a new **public** repository on GitHub, named either way above.
2. Push this folder to it:

   ```bash
   git init
   git add .
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

3. On GitHub: go to the repo's **Settings → Pages**, and under "Build and
   deployment", set **Source** to **GitHub Actions**. That's it — the
   workflow in `.github/workflows/deploy.yml` builds and deploys
   automatically on every push to `main`.
4. Your site will be live at:

   ```
   https://YOUR_USERNAME.github.io/YOUR_REPO/
   ```

   The first deploy takes 1–2 minutes — watch progress under the repo's
   **Actions** tab.

Every time you push a change to `main` afterward, the site redeploys
itself — no manual rebuild step.

## Custom domain (optional, still free)

If you ever want `seanchong.dev` or similar instead of the github.io URL,
buy a domain (~US$10–15/year — not free, but the *hosting* stays free),
add a `CNAME` file to `public/` with your domain, and point its DNS at
GitHub Pages per GitHub's docs. Not required — the github.io URL works
fine on a resume as-is.
