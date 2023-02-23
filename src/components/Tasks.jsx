import styles from './Tasks.module.css/';
import { PlusCircle, ClipboardText } from 'phosphor-react';
import { List } from './ListTasks';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export function Tasks() {

  const [tasks, setTasks] = useState([]);

  const [newTask, setNewTask] = useState('');

  const handleCreateNewTask = () => {
    event.preventDefault()

    setTasks([
      ...tasks, {
        id: uuidv4(),
        content: newTask,
        isCompleted: false
      }])
    setNewTask('')
  };

  const handleNewTaskChange = () => {
    event.target.setCustomValidity('')
    setNewTask(event.target.value)
  };

  const onCompletedTask = (taskId,) => {
    const newCompletedTasks = tasks.map(task => {
      if (task.id === taskId) {
        task.isCompleted = !task.isCompleted
      }
      return task
    })
    setTasks(newCompletedTasks);
  };

  const deleteTask = (taskToDelete) => {
    const taskWithoutDeleteOne = tasks.filter(task => {
      return task.id !== taskToDelete
    })
    setTasks(taskWithoutDeleteOne);
  };

  const newCompletedTasksList = tasks.reduce((acc, task) => acc + task.isCompleted, 0);

  const tasksQuantity = tasks.length;

  const isNewTaskEmpty = newTask.length === 0;

  const tasksIsEmpty = tasks.length === 0;

  return (
    <section className={styles.tasks} >
      <form onSubmit={handleCreateNewTask} className={styles.tasksForm}>
        <textarea
          maxLength={200}
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
          <span>{tasksQuantity}</span>
        </div>

        <div className={styles.completed}>
          <h1>Concluídas</h1>
          <span>{newCompletedTasksList + ' de ' + tasksQuantity}</span>
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
        {tasks.map((task => {
          return (
            <List
              content={task.content}
              key={task.id}
              idTask={task.id}
              isCompleted={task.isCompleted}
              onDeleteTask={deleteTask}
              checkCompletedTask={onCompletedTask}
            />
          )
        }))}
      </div>
    </section>
  );
};