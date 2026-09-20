/** @type {import('next').NextConfig} */

// GitHub Pages serves a normal ("project") repo at
// username.github.io/REPO_NAME/, so every asset path needs that
// /REPO_NAME prefix baked in at build time. But a repo specifically
// named <username>.github.io is a special "user site" repo that GitHub
// deploys to the bare root (username.github.io, no path) — that one
// needs NO prefix, or every link breaks.
// The deploy workflow (.github/workflows/deploy.yml) sets REPO_NAME
// automatically from the repository name — you don't need to edit this
// file by hand unless you want to run `npm run build` locally too.
const repoName = process.env.REPO_NAME || '';
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const isUserSiteRepo = /\.github\.io$/i.test(repoName);
const basePath = isGithubActions && repoName && !isUserSiteRepo ? `/${repoName}` : '';

const nextConfig = {
  output: 'export',
  basePath,
  assetPrefix: basePath ? `${basePath}/` : '',
  images: { unoptimized: true },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
