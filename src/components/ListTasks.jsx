import styles from './ListTasks.module.css'
import { Trash, Check } from 'phosphor-react';

export function List({ content }) {
  return (
    <div className={styles.listTasks}>
      <div className={styles.checkList}>
        <input type="checkbox" name="" id="content" value={false} />
        <label htmlFor="content" className={styles.checkLabel}></label>
      </div>
      <p>{content}</p>
      <footer>
        <button className={styles.delete}><Trash size={24} /></button>
      </footer>
    </div>
  )
}