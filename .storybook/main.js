const path = require("path")

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: ["@storybook/addon-docs", "@storybook/addon-actions/register"],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.tsx?$/,
      use: ["babel-loader"],
    })

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

    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"],
    })

    config.resolve.extensions.push(".ts", ".tsx")

    return config
  },
}
