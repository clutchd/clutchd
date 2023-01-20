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
    "@clutchd/copyright",
    "@clutchd/flex",
    "@clutchd/layout",
    "@clutchd/link",
    "@clutchd/text",
  ],
};
