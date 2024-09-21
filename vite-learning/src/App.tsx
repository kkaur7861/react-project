import { useEffect, useState } from 'react';
import './App.css';
import { TodoContextProvider } from './context';
import AddTodo from './components/todo/AddTodo';
import TodoTable from './components/todo/TodoTable';

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo: any) => {
    setTodos((pre) => [{ id: Math.random(), ...todo }, ...pre]);
  }

  const updateTodo = (id: any, todo: any) => {
    setTodos((pre) => pre.map((prevTodo) => prevTodo.id === id ? { ...todo } : prevTodo));
  }

  const deleteTodo = (id: any) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toogleComplete = (id: any) => {
    debugger;
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo)
    )
  }

  useEffect(() => {
    const todosList = JSON.parse(localStorage.getItem("todos"));
    if (todosList && todosList.length > 0) {
      setTodos(todosList);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const todoList = () => {
    return todos?.map((todo) => {
      return <TodoTable todo />
    })
  }

  const listed = todos?.map((todo) => {
    return <TodoTable todo />
  })
  return (
    <TodoContextProvider value={{ todos, addTodo, deleteTodo, toogleComplete, updateTodo }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <AddTodo />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos?.map((todo) => (<div key={todo.id}>
              <TodoTable todo={todo} />
            </div>
            ))}
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoContextProvider>
  )
}

export default App
