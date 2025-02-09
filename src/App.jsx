import { useState } from 'react';
import "./App.css";
import Todo from './components/todo';

function App() {
  
  const [todos, setTodos] = useState([
    {
      id:1,
      text: "acriar funcionalidade x no sistema",
      category:"Trabalho",
      isCompleted:false,
    },
    {
      id:2,
      text: "Ir para o ginasio",
      category:"Pessoal",
      isCompleted:false,
    },
    {
      id:3,
      text: "Estudar Matematica",
      category:"Estudos",
      isCompleted:false,
    },
  ]);

  return <div className='app'>
      <h1>Lista de tarefas</h1>
      <div className="todo-list">
        {todos.map((todo)=> (
         <Todo  todo = {todo} /> //passando a props
        ))}
      </div>
    </div>
  
}

export default App
