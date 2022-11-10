import React, { useState } from 'react';

import { AiOutlinePlusCircle } from 'react-icons/ai';
import todoLogo from '../../assets/todoLogo.svg';
import styles from './Header.module.css';

const Header = ({ onAddTask }) => {
  //
  const [title, setTitle] = useState('');

  const [enterTitleIsValid, setEnteredTitleIsValid] = useState(false);

  const [eneteredTitleTouched, setEnteredTitleTouched] = useState(false);

  const titleIsInvalid = !enterTitleIsValid && eneteredTitleTouched;

  const handleSubmit = (e) => {
    e.preventDefault();

    setEnteredTitleTouched(true);

    if (title === '') {
      setEnteredTitleIsValid(false);
      return;
    }

    // passo la funzione come prop
    onAddTask(title);

    setEnteredTitleIsValid(true);

    // clean the input after submit
    setTitle('');
  };

  const titleInputBlur = (e) => {
    setEnteredTitleTouched(true);

    if (title === '') {
      setEnteredTitleIsValid(false);
      return;
    }
  };

  // funzione che mi aggiorna lo state dell'input
  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  return (
    <>
      <header className={styles.header}>
        <img src={todoLogo} />

        {/* Form */}
        <form onSubmit={handleSubmit} className={styles.newTaskForm} action=''>
          <input
            value={title}
            onChange={onChangeTitle}
            onBlur={titleInputBlur}
            type='text'
            placeholder='Add new task'
          />

          <button>
            Create
            <span>
              <AiOutlinePlusCircle size={20} />
            </span>
          </button>

          {titleIsInvalid && <p className={styles.info}>Write your next task</p>}
        </form>
        {/*  */}
      </header>
    </>
  );
};

export default Header;
