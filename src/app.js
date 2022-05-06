import express from 'express';

const app = express();

//for express interpret json on req.body
app.use(express.json());

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

app.post('/books', (req, res) => {
  books.push(req.body);
  res.status(201).send('✅ Book registered successfully!');
});

export default app;
