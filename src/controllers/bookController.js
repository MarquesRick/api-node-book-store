import books from '../models/Book.js';

export default class BookController {
  static getAll = (req, res) => {
    books.find((err, books) => {
      if (err)
        res
          .status(500)
          .send({ message: `${err.message} - error on getAll books.` });
      else res.status(200).json(books);
    });
  };

  static getById = (req, res) => {
    const id = req.params.id;
    books.findById(id, (err, books) => {
      if (err)
        res
          .status(400)
          .send({ message: `${err.message} - error on getById - ID: ${id}.` });
      else res.status(200).json(books);
    });
  };

  static createBook = (req, res) => {
    let book = new books(req.body);
    book.save((err) => {
      if (err)
        res
          .status(500)
          .send({ message: `${err.message} - error on create book.` });
      else res.status(201).send(book.toJSON());
    });
  };

  static updateBook = (req, res) => {
    const id = req.params.id;
    books.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) res.status(200).send({ message: 'Book updated successfully!' });
      else
        res
          .status(500)
          .send({ message: `${err.message} - error on update book.` });
    });
  };
}
