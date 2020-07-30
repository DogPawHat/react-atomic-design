const path = require("path")

module.exports = {
  esModule: true,
  pageExtensions: ["jsx", "js", "tsx", "ts"],
  target: "serverless",
  webpack: (config) => {
    const node = { fs: "empty" }

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "svg-sprite-loader",
          options: {
            symbolId: "[name]_[hash]",
            runtimeCompat: false,
            prefixize: true,
          },
        },
        {
          loader: "svgo-loader",
          options: {
            plugins: [
              { removeTitle: true },
              { convertColors: { shorthex: false } },
              { convertPathData: false },
            ],
          },
        },
      ],
    })

    config.module.rules.push({
      test: /\.(jpe?g|png)$/i,
      loader: "file-loader",
      options: {
        hash: "sha512",
        digest: "hex",
        name: "[hash].[ext]",
      },
    })

    config.module.rules.push({
      test: /\.ico$/i,
      loader: "file-loader",
      options: {
        hash: "sha512",
        digest: "hex",
        name: "favicon.ico",
      },
    })

    return { ...config, node }
  },
}
