const Filter = ({filter, setFilter, setSort}) => {
  return (
    <div className="filter">
      <h2>Filtrar</h2>
      <div className="filter-option">
        <div>
          <p>Status:</p>
          <select value={filter} onChange={(e)=>setFilter(e.target.value)}>
            <option value="All">Todos</option>
            <option value="Completed">Completas</option>
            <option value="Incomplete">Incompletas</option>
          </select>
        </div>
        <div>
          <p>Ordenacao Alfabetica</p>
          <button onClick={()=> setSort("Asc")}>Asc</button>
          <button onClick={()=> setSort("Desc ")}>Desc</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
