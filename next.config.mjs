/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 1920],
    minimumCacheTTL: 60,
    qualities: [25, 50, 85],
  },
};

export default nextConfig;
