/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    images: {
      remotePatterns: [{ hostname: '**', pathname: '**' }],
    },
  },
}

module.exports = nextConfig
