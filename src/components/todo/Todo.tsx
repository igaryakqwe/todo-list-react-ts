import { FC, useState, useEffect } from 'react';
import TrashIcon from '../icons/TrashIcon';
import styles from './Todo.module.scss';

interface TodoProps {
  id: string;
  text: string;
  status: boolean;
  deleteTodo: () => void;
}

const Todo: FC<TodoProps> = ({ id, text, status, deleteTodo }) => {
  const [checkboxStatus, setCheckboxStatus] = useState(status);
  const handleChange = () => {
    checkboxStatus ? setCheckboxStatus(false) : setCheckboxStatus(true);
  }
  return (
    <div className={styles.todo}>
      <label className={styles.text}>
        <input type="checkbox" checked={checkboxStatus} onClick={handleChange} />        
        <h3>{id}. {text}</h3>
      </label>
      <button className={styles.button} onClick={deleteTodo}><TrashIcon /></button>
    </div>
  );
}

export default Todo;