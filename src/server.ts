import cors from 'cors';
import express from 'express';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api', router);

app.listen(3001, () => {
  console.log('Server is listening on port 3000');
});