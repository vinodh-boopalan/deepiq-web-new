/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'cloudinary.com'],
    unoptimized: false,
  },
}

module.exports = nextConfig