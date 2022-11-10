import { TbTrash } from 'react-icons/tb';
import styles from './Task.module.css';

const Task = () => {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer}>
        <div />
      </button>

      <p>Studiare Javascript, React, Typescript e React native</p>

      <button className={styles.deleteButton}>
        <TbTrash size={20} />
      </button>
    </div>
  );
};

export default Task;
