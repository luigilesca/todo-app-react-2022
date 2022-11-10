import React from 'react';

import { AiOutlinePlusCircle } from 'react-icons/ai';
import todoLogo from '../../assets/todoLogo.svg';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={todoLogo} />

      {/* Form */}
      <form className={styles.newTaskForm} action=''>
        <input type='text' placeholder='Add new task' />
        <button>
          Create
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
};

export default Header;
