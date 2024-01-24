// Inside Todos.jsx
const markTodoAsCompleted = (todoId) => {
    fetch('http://localhost:3000/completed', {
      method: 'PUT',
      body: JSON.stringify({ id: todoId }),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then(async (res) => {
        const data = await res.json();
        console.log(data.msg);
        // Update the state to reflect the change
        setTodos((prevTodos) =>
          prevTodos.map((t) =>
            t._id === todoId ? { ...t, completed: true } : t
          )
        );
      })
      .catch((error) => console.error('Error marking todo as completed:', error));
  };
  

export function Todos({ todos }) {
    return <div>
        {todos.map((todo) => {
            return <div>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button onClick={() => markTodoAsCompleted(todo._id)}>
                    {todo.completed ? 'Completed' : 'Mark as Complete'}
                </button>

            </div>
        })}
    </div>
}
