import express from 'express';

const app = express();

const books = [
  {
    id: 1,
    title: 'Lord Rings',
  },
  {
    id: 2,
    title: 'Hobbit',
  },
];

app.get('/', (req, res) => {
  res.status(200).send('Test 1');
});

app.get('/books', (req, res) => {
  res.status(200).json(books);
});

export default app;
