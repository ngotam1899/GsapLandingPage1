const withPlugins = require("next-compose-plugins");
const withCSS = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withBundleAnalyzer = require("@next/bundle-analyzer");
const nextRuntimeDotenv = require("next-runtime-dotenv");
const withImages = require("next-images");
const Dotenv = require("dotenv-webpack");

const withConfig = nextRuntimeDotenv({ public: ["API_URL", "API_KEY"] });

const path_dotenv = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}`: ".env" ;

console.log(path_dotenv);

const nextConfig = {
  analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: "static",
      reportFilename: "../bundles/server.html",
    },
    browser: {
      analyzerMode: "static",
      reportFilename: "../bundles/client.html",
    },
  },
  publicRuntimeConfig: {
    PROXY_MODE: process.env.PROXY_MODE,
    API_URL: process.env.API_URL,
    API_KEY: process.env.API_KEY,
    STATIC_PATH: process.env.STATIC_PATH,
    HOST: process.env.HOST,
  },
  webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {
    config.module.rules.push(
      {
        test: /\.scss$/,
        loader: ["sass-loader"],
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif|mp4)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name]-[hash:8].[ext]",
            esModule: false,
          },
        },
      },
      {
        test: /\.(js|jsx)?$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/react", "@babel/env"],
              plugins: [
                "@babel/plugin-proposal-class-properties",
                [
                  "@babel/plugin-proposal-decorators",
                  {
                    legacy: true,
                  },
                ],
                "@babel/plugin-proposal-object-rest-spread",
                "@babel/plugin-syntax-dynamic-import",
              ],
            },
          },
        ],
      },
      {
        test: /\.js$/,
        use: [
          {
            loader: 'imports-loader',
            options: {
              additionalCode: 'var define = false;'
            }
          }
        ]
      }
    );
    config.plugins.push(new Dotenv({ silent: true, path: path_dotenv }));

    return config;
  },
};

module.exports = withConfig(
  withPlugins(
    [[withCSS], [withSass], [withImages], [withBundleAnalyzer]],
    nextConfig
  )
);
