import React, { useState } from 'react';

import { AiOutlinePlusCircle } from 'react-icons/ai';
import todoLogo from '../../assets/todoLogo.svg';
import styles from './Header.module.css';

const Header = ({ onAddTask }) => {
  //
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // passo la funzione come prop
    onAddTask(title);

    // clean the input after submit
    setTitle('');
  };

  // funzione che mi aggiorna lo state dell'input
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  return (
    <header className={styles.header}>
      <img src={todoLogo} />

      {/* Form */}
      <form onSubmit={handleSubmit} className={styles.newTaskForm} action=''>
        <input value={title} onChange={onChangeTitle} type='text' placeholder='Add new task' />
        <button>
          Create
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
      {/*  */}
    </header>
  );
};

export default Header;
