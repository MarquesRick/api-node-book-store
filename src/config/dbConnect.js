import mongoose from 'mongoose';

mongoose.connect(
  'mongodb+srv://hmservicos:nirvana2009@nodeapi.av5a6.mongodb.net/NODE_API_BOOKS'
);

const db = mongoose.connection;

export default db;
