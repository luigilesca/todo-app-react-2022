import { TbTrash } from 'react-icons/tb';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import styles from './Task.module.css';

const Task = ({ task, onComplete, onDelete }) => {
  return (
    <div className={styles.task}>
      {/*  */}
      <button onClick={() => onComplete(task.id)} className={styles.checkContainer}>
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>

      <p className={task.isCompleted ? styles.textCompleted : ''}>{task.title}</p>

      <button onClick={() => onDelete(task.id)} className={styles.deleteButton}>
        <TbTrash size={20} />
      </button>
    </div>
  );
};

export default Task;
