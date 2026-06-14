/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  allowedDevOrigins: ["192.168.1.4", "192.168.1.4:3000"],
  turbopack: {
    root: '.',
  },
};

export default nextConfig;
