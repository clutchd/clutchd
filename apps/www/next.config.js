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
  transpilePackages: ["@clutchd/layout", "@clutchd/link", "@clutchd/text"],
};
