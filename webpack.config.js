var path = require("path");
const CODEMIRROR_PATH = path.resolve(
  __dirname,
  "./node_modules/survey-creator",
  "./node_modules/bootstrap/dist/css",
  "./node_modules/survey-knockout"
);

module.exports = {
  entry: "./src/main/js/app.js",
  devtool: "sourcemaps",
  cache: true,
  mode: "development",
  output: {
    path: __dirname,
    filename: "./src/main/resources/static/built/bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // include: [CODEMIRROR_PATH],
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test: path.join(__dirname, "."),
        exclude: /(node_modules)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: {
                      node: "10"
                    }
                  }
                ],
                "@babel/preset-react"
              ]
            }
          }
        ]
      }
    ]
  }
};
