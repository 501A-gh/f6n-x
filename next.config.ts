import type { NextConfig } from "next";

const lambdaEndpoint = process.env.LAMBDA_ENDPOINT;

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/api/extract-vars",
        destination: lambdaEndpoint + "/extract-vars",
      },
      {
        source: "/api/calculate",
        destination: lambdaEndpoint + "/calculate",
      },
    ];
  },
};

export default nextConfig;
