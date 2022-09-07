/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const withTM = require('next-transpile-modules')([
  "@typedorm/common",
  "@typedorm/core",
  "@typedorm/document-client",
]);

module.exports = nextConfig;
// module.exports = withTM(nextConfig);
