import React from 'react';

import todoLogo from '../../assets/todoLogo.svg';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={todoLogo} />{' '}
    </header>
  );
};

export default Header;
