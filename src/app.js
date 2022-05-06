import express from 'express';

const app = express();

//for express interpret json on req.body
app.use(express.json());

const books = [
  {
    id: 1,
    title: 'The Lord of the Rings',
  },
  {
    id: 2,
    title: 'Hobbit',
  },
];

app.get('/', (req, res) => {
  res.status(200).send('🙋🏻‍♂️👋 Welcome to API book store!');
});

app.get('/books', (req, res) => {
  res.status(200).json(books);
});

app.get('/books/:id', (req, res) => {
  let index = getBook(req.params.id);
  res.status(200).json(books[index]);
});

app.post('/books', (req, res) => {
  books.push(req.body);
  res.status(201).send('✅ Book registered successfully!');
});

app.put('/books/:id', (req, res) => {
  let index = getBook(req.params.id);
  books[index].title = req.body.title;
  res.status(200).json(books);
});

const getBook = (id) => {
  return books.findIndex((book) => book.id == id);
};

export default app;
