/** @type {import('next').NextConfig} */

// GitHub Pages serves a project site at username.github.io/REPO_NAME/,
// so every asset path needs that /REPO_NAME prefix baked in at build time.
// The deploy workflow (.github/workflows/deploy.yml) sets REPO_NAME
// automatically from the repository name — you don't need to edit this
// file by hand unless you want to run `npm run build` locally too.
const repoName = process.env.REPO_NAME || '';
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const basePath = isGithubActions && repoName ? `/${repoName}` : '';

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
