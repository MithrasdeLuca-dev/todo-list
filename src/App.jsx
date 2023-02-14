import { Header } from './components/Header';
import { List } from './components/ListTasks';
import {Tasks} from './components/Tasks'

import styles from './App.module.css';

import './Global.css';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Tasks/>
        <List/>
      </div>
    </div >
  )
}