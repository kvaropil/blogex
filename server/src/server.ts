import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

interface IPost {
  id: number;
  title: string;
  content: string;
}

app.use(cors());

app.get('/api/v1/posts', (req: Request, res: Response<IPost[]>) => {
  res.json([
    { id: 1, title: 'First post', content: 'Hello, this is my first post' },
    { id: 2, title: 'Second post', content: 'Here is some more content' },
  ]);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
