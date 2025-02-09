import { useState } from "react";

const TodoForm = ({ addTodo }) => { // Desestruturando a prop addTodo
  const [titulo, setTitulo] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titulo || !category) return;
    // Chama a função addTodo com os dois argumentos
    addTodo(titulo, category);
    // Limpa os campos
    setTitulo("");
    setCategory("");
  };

  return (
    <div className="todo-form">
      <h2>Criar Tarefa</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Selecione uma Categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Pessoal">Pessoal</option>
          <option value="Estudos">Estudos</option>
        </select>
        <button type="submit">Criar Tarefa</button>
      </form>
    </div>
  );
};

export default TodoForm;
