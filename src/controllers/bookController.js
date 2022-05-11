import books from '../models/Book.js';

export default class BookController {
  static getAll = (req, res) => {
    books.find((err, books) => {
      if (err)
        res
          .status(500)
          .send({ message: `${err.message} - error on getAll books.` });

      res.status(200).json(books);
    });
  };

  static createBook = (req, res) => {
    let book = new books(req.body);
    book.save((err) => {
      if (err)
        res
          .status(500)
          .send({ message: `${err.message} - error on create book.` });

      res.status(201).send(book.toJSON());
    });
  };
}
