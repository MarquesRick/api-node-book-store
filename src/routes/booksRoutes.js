import express from 'express';
import BookController from '../controllers/bookController.js';

const router = express.Router();

router
  .get('/books', BookController.getAll)
  .get('/books/:id', BookController.getById)
  .post('/books', BookController.createBook)
  .put('/books/:id', BookController.updateBook);

export default router;
