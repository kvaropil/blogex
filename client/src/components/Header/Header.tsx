import React from 'react';
import styles from './Header.module.scss';

interface IHeader {
  children: string | JSX.Element | JSX.Element[];
}

export const Header: React.FC<IHeader> = ({ children }) => (
  <h1 className={styles.title}>{children}</h1>
);
