module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["coding-challenge-api.aerolab.co", "aerolab.co"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
