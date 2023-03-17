// next.config.js
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withImages = require('next-images');
module.exports = withImages({
  webpack(config, { isServer }) {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        // Unset client-side javascript that only works server-side
        // https://github.com/vercel/next.js/issues/7755#issuecomment-508633125
      };
    }

    // Fixes sharp error
    config.externals.push({
      sharp: 'commonjs sharp',
    });

    // Fixes react-pdf error
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;

    return config;
  },
  images: {
    domains: [
      'i.gr-assets.com',
      'a.ltrbxd.com',
      'www.notion.so',
      'notion.so',
      's3.us-west-2.amazonaws.com',
    ],
    disableStaticImages: true,
  },
  target: 'serverless',
  experimental: {
    appDir: true,
  },
});
