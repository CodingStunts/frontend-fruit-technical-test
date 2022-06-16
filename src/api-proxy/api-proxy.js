const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const apiProxy = createProxyMiddleware({
  target: "https://www.fruityvice.com/api/",
  changeOrigin: true,
});

const app = express();
app.use("/", apiProxy);
app.listen(9090);

export default apiProxy;

/*

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://www.fruityvice.com",
      changeOrigin: true,
    })
  );
}; */
