import mongoose from 'mongoose';

// if local mongo
// mongoose.connect("mongodb://127.0.0.1:27017/api-books");
mongoose.connect(
  'mongodb+srv://hmservicos:nirvana2009@nodeapi.av5a6.mongodb.net/api-books'
);

const db = mongoose.connection;

export default db;
