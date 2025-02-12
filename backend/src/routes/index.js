const express = require('express');
const productsRouter = require('../components/products/network');
const cartRouter = require('../components/cart/network');


function routerApi(app) {
  const router = express.Router()
  app.use('/api/v1/', router)
  router.use('/products', productsRouter);
  router.use('/cart', cartRouter);
}

module.exports = routerApi;