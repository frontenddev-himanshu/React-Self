import { useEffect, useState } from 'react'
import './App.css'
import { ToDoProvider } from './Context'
import { ToDoForm, ToDoItems } from "./components/Index"

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: Date.now(),
        ...todo,
        completed: false,
      },
    ])
  }

  const updateTodo = (id, todo) => {
    setTodos((prevTodos) => prevTodos.map((t) => (t.id === id ? todo : t)))
  }

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((t) => t.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    )
  }


  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  return (
    <ToDoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <ToDoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {
              todos.map((todo) => (
                <div key={todo.id} className="w-full">
                  <ToDoItems todo={todo} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </ToDoProvider>
  )
}

export default App
