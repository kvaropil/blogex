import React from 'react';

import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
dayjs.extend(localizedFormat);

import styles from './App.module.scss';
import { Header } from './components/Header/Header';
import { Posts } from './components/Posts/Posts';

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Header>Blogex</Header>
      <Posts />
    </div>
  );
};

export default App;
