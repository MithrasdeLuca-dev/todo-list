import { Header } from './components/Header';

import styles from './App.module.css';

import './Global.css';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
      </div>
    </div >
  )
}