import express from 'express';
import db from './config/dbConnect.js';
import books from './models/Book.js';
import routes from './routes/index.js';

//connect to database
db.on('error', console.log.bind(console, '❌ Database connection error!'));
db.once('open', () => {
  console.log('✅ Database successfully connected!');
});
const app = express();

routes(app);

export default app;
