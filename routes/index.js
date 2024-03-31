const express = require('express');

const productRouter = require('./products.router');
const categoriesRouter = require('./categories.router');
const usersRouter = require('./users.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productRouter);
  router.use('/categories', usersRouter);
  router.use('/users', categoriesRouter);
}

module.exports = routerApi;
