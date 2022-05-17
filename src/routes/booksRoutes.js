import express from 'express';
import BookController from '../controllers/bookController.js';

const router = express.Router();

router
  .get('/books', BookController.getAll)
  .get('/books/search', BookController.getBookByPublisher)
  .get('/books/:id', BookController.getById)
  .post('/books', BookController.createBook)
  .put('/books/:id', BookController.updateBook)
  .delete('/books/:id', BookController.deleteBook);

export default router;
