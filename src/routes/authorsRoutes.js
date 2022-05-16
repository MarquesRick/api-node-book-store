import express from 'express';
import AuthorController from '../controllers/AuthorController.js';

const router = express.Router();

router
  .get('/authors', AuthorController.getAll)
  .get('/authors/:id', AuthorController.getById)
  .post('/authors', AuthorController.createAuthor)
  .put('/authors/:id', AuthorController.updateAuthor)
  .delete('/authors/:id', AuthorController.deleteAuthor);

export default router;
