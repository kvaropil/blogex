import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

interface IPost {
  id: number;
  title: string;
  content: string;
  createdAt?: Date;
}

app.use(cors());

app.get('/api/v1/posts', (req: Request, res: Response<IPost[]>) => {
  res.json([
    {
      id: 1,
      title: 'First post',
      content: 'Hello, this is my first post',
      createdAt: new Date(Date.now()),
    },
    {
      id: 2,
      title: 'Second post',
      content: 'Here is some more content',
      createdAt: new Date(Date.now()),
    },
    {
      id: 3,
      title: 'Third post',
      content: 'Here is some more content',
      createdAt: new Date(Date.now()),
    },
    {
      id: 4,
      title: 'Fourth post',
      content: 'Here is some more content',
      createdAt: new Date(Date.now()),
    },
    {
      id: 5,
      title: 'Fifth post',
      content: 'Here is some more content',
      createdAt: new Date(Date.now()),
    },
  ]);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
