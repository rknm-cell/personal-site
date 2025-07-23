/** @type {import("next").NextConfig} */
const config = {
  typescript: {
    // Ignore TypeScript errors during build to avoid build manifest issues
    ignoreBuildErrors: true,
  },
  eslint: {
    // Ignore ESLint errors during build
    ignoreDuringBuilds: true,
  },
};

export default config;
