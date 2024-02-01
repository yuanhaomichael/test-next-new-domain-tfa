// @ts-check

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  async rewrites() {
    return {
      fallback: [
        {
          source: "/:path*",
          destination: `https://example.com`,
        },
      ],
    };
  },
};

module.exports = nextConfig;


// api/[...all].ts
// import httpProxy from "http-proxy";

// export const config = {
//   api: {
//     // Enable `externalResolver` option in Next.js
//     externalResolver: true,
//     bodyParser: false,
//   },
// };

// export default (req, res) =>
//   new Promise((resolve, reject) => {
//     const proxy: httpProxy = httpProxy.createProxy();
//     proxy.once("proxyRes", resolve).once("error", reject).web(req, res, {
//       changeOrigin: true,
//       target: "https://certik.com",
//     });
//   });