//Tried accessing the API using several proxy methods but none of them worked, so ended up using the cors-anywhere heroku api.

/* const { createProxyMiddleware } = require("http-proxy-middleware");

const proxy = {
  target: "http://www.fruityvice.com/api",
  changeOrigin: true,
};
module.exports = function (app) {
  app.use("/fruit/all", createProxyMiddleware(proxy));
};

const express = require("express");

const app = express();
app.use("/", apiProxy);
app.listen(9090);

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://www.fruityvice.com",
      changeOrigin: true,
    })
  );
}; */
