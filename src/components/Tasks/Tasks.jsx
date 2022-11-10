import React from 'react';
import Task from '../Task/Task';

import styles from './Tasks.module.css';

const Tasks = ({ tasks, onComplete, onDelete }) => {
  //
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;
  const allTasksIsCompleted = tasksQuantity === completedTasks;

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Create tasks</p>
          <span>{tasksQuantity}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed</p>
          <span>
            {completedTasks} of {tasksQuantity}
          </span>
        </div>
      </header>

      <div className={styles.list}>
        {allTasksIsCompleted ? (
          <p className={styles.info}>Congratulation! You have completed all tasks! 🎉</p>
        ) : (
          ''
        )}

        {tasksQuantity === 0 ? (
          <p className={styles.info}>At the moment you don't have tasks.</p>
        ) : (
          tasks.map((task) => (
            <Task key={task.id} task={task} onComplete={onComplete} onDelete={onDelete} />
          ))
        )}
      </div>
    </section>
  );
};

export default Tasks;
