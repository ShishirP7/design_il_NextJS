/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { appDir: true },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
       { protocol: "https", hostname: "thumbs.dreamstime.com" }
    ]
  }
};
export default nextConfig;
