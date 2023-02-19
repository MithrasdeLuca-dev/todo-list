import styles from './ListTasks.module.css';
import { Trash, Check, Key } from 'phosphor-react';

export function List({ content, idTask}) {

  return (
    <div>
      {content && (
        <div className={styles.listTasks}>
          <div className={styles.checkList}>
          <input
                type="checkbox"
                name=""
                id={idTask}
                />
            <label htmlFor={idTask}></label>
          </div>
          <div className={styles.paragraph}>
            <p>{content}</p>
          </div>
          <footer>
            <button className={styles.delete}><Trash size={20} /></button>
          </footer>
        </div>
      )}
    </div>
  )
} 