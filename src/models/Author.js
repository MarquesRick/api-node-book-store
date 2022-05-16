import mongoose from 'mongoose';

const authorSchema = new mongoose.Schema(
  {
    id: { type: String },
    name: { type: String },
    nationality: { type: String },
  },
  {
    versionKey: false,
  }
);

const authors = mongoose.model('author', authorSchema);

export default authors;
