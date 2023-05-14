/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}


module.exports = {
  images: {
    domains: ['nestjs-production-0acd.up.railway.app'],
    formats: ['image/avif','image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://nestjs-production-0acd.up.railway.app/', 
        port: '3000',
      },
    ],
  },
  nextConfig
}

// next.config.js

