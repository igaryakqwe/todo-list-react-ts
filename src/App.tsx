import List from "./components/list";
import Form from "./components/form";
import { useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState([
    { id: '12312', text: 'Зробити туду ліст', status: false },
    { id: '13312', text: 'Зробити відео', status: true },
    { id: '14312', text: 'Зробити урок', status: false },
  ]);

  const deleteTodo = (todoId: string) => {
    setTodos(todos.filter(todo => todo.id !== todoId));
  }

  const addTodo = (todoText: string) => {
    const newTodo = { 
      id: new Date().toISOString(), 
      text: todoText, 
      status: false
    };

    setTodos([...todos, newTodo])
  }

  return (
    <div className="App">
      <Form addTodo={addTodo} />
      <List todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
