//Tried accessing the API using several proxy methods but none of them worked, so ended up using the cors-anywhere heroku api.

/*const { createProxyMiddleware } = require("http-proxy-middleware");
const express = require("express");

const proxy = {
  target: "http://www.fruityvice.com/api",
  changeOrigin: true,
};

const app = express();
app.listen(9090).then(console.log("Running server"));

module.exports = function (app) {
  app.use("/fruit/all", createProxyMiddleware(proxy));
};
 module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://www.fruityvice.com",
      changeOrigin: true,
    })
  );
};  */
