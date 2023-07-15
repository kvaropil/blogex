import React from 'react';
import IPost from '../../interfaces/IPost';

import styles from './Post.module.scss';

import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
dayjs.extend(localizedFormat);

export const Post: React.FC<IPost> = ({ id, title, content, createdAt }) => {
  return (
    <div key={id} className={styles.post}>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>{dayjs(createdAt).format('L LT')}</p>
    </div>
  );
};
