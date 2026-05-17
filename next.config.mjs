/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  // Tree-shake large icon/component libraries — only bundle icons you actually use
  experimental: {
    optimizePackageImports: ["react-icons", "lucide-react"],
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
};

export default nextConfig;

