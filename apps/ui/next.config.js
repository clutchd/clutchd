module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
  reactStrictMode: true,
  transpilePackages: [
    "@clutchd/avatar",
    "@clutchd/config",
    "@clutchd/layout",
    "@clutchd/tailwind",
    "@clutchd/text",
    "@clutchd/tsconfig",
  ],
};
