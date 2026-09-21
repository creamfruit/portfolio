// GitHub Pages serves this site from a sub-path when the repo isn't named
// <username>.github.io (e.g. /portfolio/...). Next.js's basePath config
// automatically prefixes routes and its own asset tags, but a plain string
// like '/images/foo.png' passed to a raw <img> tag does NOT get that prefix
// added automatically — so every image built that way 404s once deployed
// under a sub-path. Run every public asset path through withBase() to fix
// that, instead of writing the string directly.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const withBase = (path) => `${basePath}${path}`;
