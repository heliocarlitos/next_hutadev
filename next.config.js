require('ts-node').register();
const nextConfig = require('./next.config.ts').default;

module.exports = {
  ...nextConfig,
  images: {
    domains: ['via.placeholder.com'],
  },
};
