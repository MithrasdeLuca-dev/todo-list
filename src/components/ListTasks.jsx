import styles from './ListTasks.module.css';
import { Trash, Check } from 'phosphor-react';

export function List({ content }) {

  return (
    <div>
      {content && (
        <div className={styles.listTasks}>
          <div className={styles.checkList}>
            <input type="checkbox" name="" id="content" value={false} />
            <label htmlFor="content" className={styles.checkLabel}></label>
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