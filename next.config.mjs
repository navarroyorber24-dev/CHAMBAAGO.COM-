/** @type {import('next').NextConfig} */
const nextConfig = {
  // Do not hide TypeScript failures in production builds.
  typescript: {
    ignoreBuildErrors: false,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
