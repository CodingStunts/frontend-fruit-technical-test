const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://www.fruityvice.com',
            changeOrigin: true,
        })
    );
    app.use(
        '/search',
        createProxyMiddleware({
            target: 'https://api.unsplash.com',
            changeOrigin: true,
        })
    );
};