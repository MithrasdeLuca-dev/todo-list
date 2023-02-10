import styles from './Tasks.module.css/'
import { PlusCircle } from 'phosphor-react';

export function Tasks() {
  return (
    <article className={styles.tasks} >
      <form className={styles.tasksForm}>
        <textarea
          name='task'
          placeholder='Adicione uma nova tarefa'
          rows="10">
        </textarea>

        <footer>
          <button type="submit"> Criar <PlusCircle size={20}/> </button>
        </footer>
      </form>

      <div></div>
    </article>
  )
}