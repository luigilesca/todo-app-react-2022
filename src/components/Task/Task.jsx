import { TbTrash } from 'react-icons/tb';
import styles from './Task.module.css';

const Task = ({ task }) => {
  return (
    <div className={styles.task}>
      {/*  */}
      <button className={styles.checkContainer}>
        <div />
      </button>

      <p>{task.title}</p>

      <button className={styles.deleteButton}>
        <TbTrash size={20} />
      </button>
    </div>
  );
};

export default Task;
