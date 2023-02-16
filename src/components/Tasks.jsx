import styles from './Tasks.module.css/';
import { PlusCircle, ClipboardText } from 'phosphor-react';
import { List } from './ListTasks';
import { useState } from 'react';
import uuidv4 from 'react-uuid';

export function Tasks() {
  const [tasks, setTasks] = useState([])

  const [newTask, setNewTask] = useState('')

  function handleCreateNewTask() {
    event.preventDefault()

    setTasks([...tasks, newTask]);
    setNewTask('')
  }

  function handleNewTaskChange() {
    event.target.setCustomValidity('')
    setNewTask(event.target.value)
  }

  const isNewTaskEmpty = newTask.length === 0

  const tasksIsEmpty = tasks.length === 0

  return (
    <section className={styles.tasks} >
      <form onSubmit={handleCreateNewTask} className={styles.tasksForm}>
        <textarea
          value={newTask}
          name='task'
          onChange={handleNewTaskChange}
          placeholder='Adicione uma nova tarefa'
          rows="10">
        </textarea>

        <footer>
          <button type="submit" disabled={isNewTaskEmpty} > Criar <PlusCircle size={20} /> </button>
        </footer>
      </form>

      <div className={styles.taskStatus}>
        <div className={styles.created}>
          <h1>Tarefas criadas</h1>
        </div>
        <div className={styles.completed}>
          <h1>Concluídas</h1>
        </div>
      </div>

      {tasksIsEmpty && (
        <div className={styles.sidebarTask}>
          <ClipboardText size={56} />
          <p>
            <strong>
              Você ainda não tem tarefas cadastradas
            </strong>
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      )}

      <div className={styles.newTaskList}>
        {tasks.map(task => {
          return (
            <List
              content={task}
              key={uuidv4()}
            />
          )
        })}
      </div>
    </section>
  )
}