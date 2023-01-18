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
    "@clutchd/config",
    "@clutchd/layout",
    "@clutchd/link",
    "@clutchd/tailwind",
    "@clutchd/text",
    "@clutchd/tsconfig",
  ],
};
