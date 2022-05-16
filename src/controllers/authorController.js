import authors from '../models/author.js';

export default class AuthorController {
  static getAll = (req, res) => {
    authors.find((err, authors) => {
      if (err)
        res
          .status(500)
          .send({ message: `${err.message} - error on getAll authors.` });
      else res.status(200).json(authors);
    });
  };

  static getById = (req, res) => {
    const id = req.params.id;
    authors.findById(id, (err, authors) => {
      if (err)
        res.status(400).send({
          message: `${err.message} - error on getById - ID: ${id} not found!`,
        });
      else res.status(200).json(authors);
    });
  };

  static createAuthor = (req, res) => {
    let author = new authors(req.body);
    author.save((err) => {
      if (err)
        res
          .status(500)
          .send({ message: `${err.message} - error on create author.` });
      else res.status(201).send(author.toJSON());
    });
  };

  static updateAuthor = (req, res) => {
    const id = req.params.id;
    authors.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err)
        res.status(200).send({ message: 'author updated successfully!' });
      else
        res
          .status(500)
          .send({ message: `${err.message} - error on update author.` });
    });
  };

  static deleteAuthor = (req, res) => {
    const id = req.params.id;
    authors.findByIdAndDelete(id, (err) => {
      if (!err)
        res.status(200).send({ message: 'author deleted successfully!' });
      else
        res.status(500).send({
          message: `${err.message} - error on delete author. author not found!`,
        });
    });
  };
}
