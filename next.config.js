/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}


module.exports = {
  images: {
    formats: ['image/avif','image/webp'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost', 
        port: '3000',
      },
    ],
  },
  nextConfig
}