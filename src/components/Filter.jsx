const Filter = () => {
  return (
    <div className="filter">
      <h2>Filtrar</h2>
      <div>
        <p>Status:</p>
        <select>
            <option value="All">Todos</option>
            <option value="completed">Completas</option>
            <option value="incompleted">Incompletas</option>
        </select>
      </div>
      <div>
        <p>Ordenacao Alfabetica</p>
        <button>Asc</button>
        <button>Desc</button>
      </div>
    </div>
  );
};

export default Filter;
