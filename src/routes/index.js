import express from 'express';
import books from './booksRoutes.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from '../swagger.json' assert { type: 'json' };

const routes = (app) => {
  app.get('/', (req, res) => {
    res.status(200).send('🙋🏻‍♂️👋 Welcome to API book store!');
  });
  //swagger
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  app.use(express.json(), books);
};

export default routes;
