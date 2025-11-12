/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // allow all hostnames over HTTPS
      },
      {
        protocol: "http",
        hostname: "**", // allow all hostnames over HTTP (optional)
      },
    ],
  },
};

export default nextConfig;
