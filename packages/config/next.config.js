const withTM = require("next-transpile-modules")([
  "@clutchd/avatar",
  "@clutchd/card",
  "@clutchd/clsx",
  "@clutchd/component",
  "@clutchd/config",
  "@clutchd/divider",
  "@clutchd/flex",
  "@clutchd/grid",
  "@clutchd/is-empty",
  "@clutchd/layout",
  "@clutchd/link",
  "@clutchd/protect",
  "@clutchd/skeleton",
  "@clutchd/tailwind",
  "@clutchd/text",
  "@clutchd/tsconfig",
]);

module.exports = withTM({
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
});
