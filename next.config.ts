import type { NextConfig } from "next";

const lambdaEndpoint = process.env.LAMBDA_ENDPOINT;

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
