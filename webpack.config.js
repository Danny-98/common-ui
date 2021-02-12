var path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/skeleton/index.tsx",
  output: {
    path: path.resolve("lib"),
    filename: "bundle.js",
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.tsx|ts?$/,
        loader: ["babel-loader", "ts-loader"],
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
};
