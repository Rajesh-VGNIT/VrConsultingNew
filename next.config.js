/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
    qualities: [75, 100],
  },
};

module.exports = nextConfig;


module.exports = {
  async rewrites() {
    return [
      {
        source: "/:slug",
        destination: "/services/:slug",
      },
    ];
  },
};
