import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Fetch todos from the server when the component mounts
    fetch('http://localhost:3000/todos')
      .then(async (res) => {
        const data = await res.json();
        setTodos(data.todos);
      })
      .catch((error) => console.error('Error fetching todos:', error));
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  );
}

export default App
