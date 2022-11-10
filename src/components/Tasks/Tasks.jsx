import React from 'react';
import Task from '../Task/Task';

import styles from './Tasks.module.css';

const Tasks = () => {
  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Create tasks</p>
          <span>10</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed</p>
          <span>1 of 10</span>
        </div>
      </header>

      <div className={styles.list}>
        <Task />
      </div>
    </section>
  );
};

export default Tasks;
