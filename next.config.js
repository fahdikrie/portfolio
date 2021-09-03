// next.config.js
const withImages = require('next-images')
module.exports = withImages({
  webpack(config, { isServer }) {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        // Unset client-side javascript that only works server-side
        // https://github.com/vercel/next.js/issues/7755#issuecomment-508633125
      }
    }

    return config
  },
  images: {
    domains: ['i.gr-assets.com', 'a.ltrbxd.com'],
    disableStaticImages: true,
  },
  target: 'serverless',
})