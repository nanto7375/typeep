import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.listen(3030, () => {
  console.log('Hello, typeep!');
});
