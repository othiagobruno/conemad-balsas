/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    DATABASE_URL: process.env.DATABASE_URL,
    JWT_SECRET: process.env.JWT_SECRET,
  },
  async rewrites() {
    return [{ source: '/api/:path*', destination: '/api/routes/:path*' }]
  },
}

module.exports = nextConfig
