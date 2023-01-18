const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(createProxyMiddleware('/api', { target: 'https://officeapi.dev/api/quotes/random', timeout: 20000
}));
};
