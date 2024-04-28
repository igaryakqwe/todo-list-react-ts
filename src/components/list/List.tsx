import { FC } from 'react'
import Todo from '../todo/Todo';
import styles from './List.module.scss'

interface TodoSchema {
  id: string;
  text: string;
  status: boolean;
}

interface ListProps {
  todos: TodoSchema[];
  deleteTodo: (id: string) => void;
}

const List: FC<ListProps> = ({ todos, deleteTodo }) => {
  return (
    <div className={styles.list}>
      {todos.map((todo, index) => 
        <Todo 
          key={todo.id} 
          id={(index + 1).toString()} 
          text={todo.text}
          status={todo.status} 
          deleteTodo={() => deleteTodo(todo.id)}
        />
      )}
    </div>
  )
}

export default List;