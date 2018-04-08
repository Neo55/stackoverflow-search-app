const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./public/index.html",
  filename: "./index.html"
});

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader",
        query: {
          limit: 10000,
          mimetype: "application/font-woff",
          name: "fonts/[name].[ext]"
        }
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader",
        query: {
          limit: "10000",
          mimetype: "application/octet-stream",
          name: "fonts/[name].[ext]"
        }
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader",
        query: {
          name: "fonts/[name].[ext]"
        }
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: "svg-url-loader",
        query: {
          limit: "10000",
          mimetype: "application/svg+xml",
          name: "img/[name].[ext]"
        }
      },
      {
        test: /\.(png|jpg)$/,
        loader: "url-loader",
        query: {
          limit: 8192,
          name: "img/[name].[ext]"
        }
      },
      {
        test: /\.ico(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url-loader",
        query: {
          name: "img/[name].[ext]"
        }
      }
    ]
  },
  plugins: [htmlPlugin]
};
