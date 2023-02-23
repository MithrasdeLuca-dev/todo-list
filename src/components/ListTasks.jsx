import styles from './ListTasks.module.css';
import { Trash } from 'phosphor-react';

export function List({ content, idTask, checkCompletedTask, isCompleted, onDeleteTask }) {

  const handleCompletedTask = () => {
    checkCompletedTask(idTask)
  };

  const handleDeleteTask = () => {
    onDeleteTask(idTask)
  };

  return (
    <div>
      {content && (
        <div className={styles.listTasks}>
          <div className={styles.checkList}>
            <input
              onChange={handleCompletedTask}
              type="checkbox"
              id={idTask}
            />
            <label htmlFor={idTask}></label>
          </div>

          <p className={isCompleted ? styles.textCompleted : ""}>
            {content}
          </p>

          <footer>
            <button onClick={handleDeleteTask} className={styles.delete}><Trash size={20} id={idTask} /></button>
          </footer>
        </div>
      )}
    </div>
  );
};