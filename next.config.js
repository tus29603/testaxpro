/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: false,
  // Ensure assets are properly exported for GitHub Pages
  distDir: 'out',
  // No basePath needed for root domain (textaxpro.com)
  basePath: '',
  assetPrefix: '',
  // Disable features not compatible with static export
  reactStrictMode: true,
  // Ensure proper static export
  generateBuildId: async () => {
    return 'static-build'
  },
}

module.exports = nextConfig

