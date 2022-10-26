module.exports = {
    module: {
      rules: [
        {
          test: /\.svg$/,
          issuer: /\.(js|ts)x?$/,
          use: ['@svgr/webpack'],
        },
      ],
    },
  }