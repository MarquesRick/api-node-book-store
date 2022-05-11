import express from 'express';
import db from './config/dbConnect.js';
import books from './models/Book.js';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './swagger.json' assert { type: 'json' };

//connect to database
db.on('error', console.log.bind(console, '❌ Database connection error!'));
db.once('open', () => {
  console.log('✅ Database successfully connected!');
});
const app = express();

//for express interpret json on req.body
app.use(express.json());

//swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// const books = [
//   {
//     id: 1,
//     title: 'The Lord of the Rings',
//   },
//   {
//     id: 2,
//     title: 'Hobbit',
//   },
// ];

app.get('/', (req, res) => {
  res.status(200).send('🙋🏻‍♂️👋 Welcome to API book store!');
});

app.get('/books', (req, res) => {
  books.find((err, books) => {
    res.status(200).json(books);
  });
});

app.get('/books/:id', (req, res) => {
  let index = getBook(req.params.id);
  res.status(200).json(books[index]);
});

app.get('/book/findByTitle', (req, res) => {
  console.log('entrou!!!');
  const { title } = req.query;
  const book = books.filter((b) => b.title.includes(title));
  console.log(book);
  res.status(200).json(book);
});

app.post('/books', (req, res) => {
  books.push(req.body);
  res.status(201).json(books);
});

app.put('/books/:id', (req, res) => {
  let index = getBook(req.params.id);
  books[index].title = req.body.title;
  res.status(200).json(books);
});

app.delete('/books/:id', (req, res) => {
  let { id } = req.params;
  let index = getBook(id);
  books.splice(index, 1);
  res.status(200).send(`✅ Book ${id} successfully removed!`);
});

const getBook = (id) => {
  return books.findIndex((book) => book.id == id);
};

export default app;
