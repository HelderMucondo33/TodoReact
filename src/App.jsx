import { useState } from 'react';
import "./App.css";
import Todo from './components/todo';
import TodoForm from './components/TodoForm';
import Search from './components/Search';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "acriar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para o ginasio",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar Matematica",
      category: "Estudos",
      isCompleted: false,
    },
  ]);

const [search, setSearch] = useState("");

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const completeTodo = (id) =>{
   const newTodos = [...todos]
   newTodos.map((todo) => todo.id===id ? todo.isCompleted = !todo.isCompleted : todo)
   setTodos(newTodos)
  }

  return (
    <div className='app'>
      <h1>Lista de tarefas</h1>
      <Search search={search} setSearch={setSearch}/>
      <div className="todo-list">
        {todos.filter((todo)=>
         todo.text.toLowerCase().includes(search.toLowerCase())).
         map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo= {completeTodo} />
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
