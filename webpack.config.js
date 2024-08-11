const path = require("path");
const fs = require("fs");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const dotenv = require("dotenv");
dotenv.config();


module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath:"/",

  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
              context: "src",
              outputPath: "assets/",
              esModule: false,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new webpack.DefinePlugin({
      "process.env": {
        REACT_APP_SERVER: JSON.stringify(process.env.REACT_APP_SERVER),
        REACT_APP_PORT: JSON.stringify(process.env.REACT_APP_PORT),
        // Add other environment variables as needed
      },
    }),
  ],


  devServer: {
    server: {
      type: "https",
      options: {
        key: fs.readFileSync(path.resolve(__dirname, "server.key")),
        cert: fs.readFileSync(path.resolve(__dirname, "server.crt")),
      },
    },
    static: {
      directory: path.join(__dirname, "dist"),
    },
    compress: true,
    port: 9000,
    historyApiFallback: true, // This is the key setting
  },

  mode: "development",
};
