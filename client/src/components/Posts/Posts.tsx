import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse, AxiosError } from 'axios';
import IPost from '../../interfaces/IPost';
import { Post } from '../Post/Post';

export const Posts: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response: AxiosResponse<IPost[]> = await axios.get<IPost[]>(
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

  return posts.map((post) => (
    <div key={post.id}>
      <Post
        id={post.id}
        title={post.title}
        content={post.content}
        createdAt={post.createdAt}
      />
    </div>
  ));
};
