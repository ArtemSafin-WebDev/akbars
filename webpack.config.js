const path = require("path");

module.exports = {
  entry: {
    App: "./src/js/main.js",
    Mobile: "./src/js/main-m.js"
  },
  output: {
    path: path.resolve(__dirname, "./build/js"),
    filename: '[name].js'
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
