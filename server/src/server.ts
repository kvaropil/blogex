import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/api/v1/posts', (req, res) => {
  res.json([
    { id: 1, title: 'First post', content: 'Hello, this is my first post' },
    { id: 2, title: 'Second post', content: 'Here is some more content' },
  ]);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
