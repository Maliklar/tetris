const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.ts",
  devtool: "inline-source-map",
  mode: "development",

  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 3000,
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "My Project",
      template: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    library: "my-library",
    libraryTarget: "umd", // exposes and know when to use module.exports or exports.
  },
};
