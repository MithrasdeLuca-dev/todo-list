import todoLogo from '../assets/todologo.svg';
import todoName from '../assets/todoname.svg';

import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className= {styles.logo}>
        <img src={todoLogo} alt='Logotipo do Todo' />
        <img src={todoName} alt='Nome do Todo' />
      </div>
    </header>
  );
};