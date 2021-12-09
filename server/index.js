// #region Global Imports
const next = require("next");
const express = require("express");
const path = require("path");
// #endregion Global Imports

// #region Local Imports
const routes = require("./routes");
const devProxy = require("./proxy");
// #endregion Local Imports
const port = parseInt(process.env.PORT || "3000", 10);
const host = process.env.HOSTNAME || "localhost";
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });

const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();

  app.setAssetPrefix(process.env.STATIC_PATH);
  server.use(express.static(path.join(__dirname, "../public/static")));

  if (process.env.PROXY_MODE === "local") {
    // eslint-disable-next-line global-require
    const proxyMiddleware = require("http-proxy-middleware");
    Object.keys(devProxy).forEach(context => {
      server.use(proxyMiddleware(context, devProxy[context]));
    });
  }

  server.all("*", (req, res) => handler(req, res));

  server.listen(port);

  // eslint-disable-next-line no-console
  console.log(
    `> Server listening at http://${host}:${port} as ${
      dev ? "development" : process.env.NODE_ENV
    }`
  );
});
