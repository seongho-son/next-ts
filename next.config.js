/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  // experimental: {
  //   images: {
  //     remotePatterns: [{ hostname: '**', pathname: '**' }],
  //   },
  // },
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const removeImports = require('next-remove-imports')()

module.exports = removeImports(nextConfig)
