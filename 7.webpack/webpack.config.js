module.exports = {
  mode: "development",
  context: __dirname + "/src",
  entry: {
    kong: "./index.js",
  },
  output: {
    path: __dirname + "/",
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
