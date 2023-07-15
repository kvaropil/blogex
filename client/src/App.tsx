import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';

import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
dayjs.extend(localizedFormat);

import styles from './App.module.scss';

interface Post {
  id: number;
  title: string;
  content: string;
  createdAt: Date;
}

const App: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response: AxiosResponse<Post[]> = await axios.get<Post[]>(
          'http://localhost:3000/api/v1/posts',
        );
        setPosts(response.data);
      } catch (err) {
        const axiosError = err as AxiosError;
        console.error(axiosError.message);
      }
    };

    void fetchData();
  }, []);

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Blogex</h1>
      {posts.map((post) => (
        <div key={post.id} className={styles.post}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p>{dayjs(post.createdAt).format('L LT')}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
