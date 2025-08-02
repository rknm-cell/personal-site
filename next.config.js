/** @type {import('next').NextConfig} */
const config = {
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  typescript: {
    // Ignore TypeScript errors during build
    ignoreBuildErrors: false,
  },
  eslint: {
    // Ignore ESLint errors during build
    ignoreDuringBuilds: false,
  },
}

export default config
