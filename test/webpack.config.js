const HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");
module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    hot: true,
  },
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx|ts?$/,
        loader: ["babel-loader", "ts-loader"],
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules\/(?!(lit-html)\/).*/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ], // other loader configuration goes in the array
  },
  resolve: { extensions: [".js", ".jsx", ".react.js", ".ts", ".tsx"] },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
