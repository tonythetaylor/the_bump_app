module.exports = {
    context: __dirname + "/src",
    entry: "./index.js",
  
    output: {
      filename: "index.js",
      path: __dirname + "/dist",
    },
    module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loaders: ["babel-loader"],
          }
        ],
      },
  }