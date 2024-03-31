const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.1.0',
    info: { title: 'Crossfit WOD API', version: '1.0.0' },
  },
  apis: ['./../routes/products.router.js', './../services/product.service.js'],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
  app.use('/routes', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get('/routes', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
  console.log(' availabe ${port}');
};

module.exports = { swaggerDocs };
