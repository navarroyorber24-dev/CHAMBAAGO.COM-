/** @type {import('next').NextConfig} */
const nextConfig = {
  // Do not ignore TypeScript errors: CI must block broken builds.
  images: {
    unoptimized: true,
  },
}

export default nextConfig
