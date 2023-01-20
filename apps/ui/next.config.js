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
    "@clutchd/card",
    "@clutchd/copyright",
    "@clutchd/divider",
    "@clutchd/flex",
    "@clutchd/layout",
    "@clutchd/link",
    "@clutchd/text",
  ],
};
