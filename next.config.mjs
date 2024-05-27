/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "streamtube.marstheme.com",
      },
    ],
  },
};

export default nextConfig;
