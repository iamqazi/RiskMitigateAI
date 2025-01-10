/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Keep your static export configuration
  images: {
    unoptimized: true, // Disable image optimization
  },
};

module.exports = nextConfig;
