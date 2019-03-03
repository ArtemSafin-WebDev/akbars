const path = require("path");

module.exports = {
  entry: {
    App: "./src/js/main.js"
  },
  output: {
    path: path.resolve(__dirname, "./build/js"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  mode: "development",
  externals: {
    jquery: 'jQuery'
  }
};
