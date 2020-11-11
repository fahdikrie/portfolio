// next.config.js
const withImages = require('next-images')
module.exports = withImages({
  webpack(config, options) {
    return config
  },
  images: {
    domains: ['i.gr-assets.com', 'a.ltrbxd.com'],
  }
})