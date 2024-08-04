import { useEffect, useState } from "react";
import { useTask } from "../context/TasksContext";

function HistorialTable() {
  const { tasks, getTasksComplete } = useTask();

  const [search, setSearch] = useState("");

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  let results = [];

  if (!search) {
    results = tasks;
  } else {
    results = tasks.filter((dato) =>
      dato.ubicacion.toLowerCase().includes(search.toLocaleLowerCase())
    );
  }

  useEffect(() => {
    getTasksComplete();
  }, []);

  return (
    <div className="table">
      <div className="table_header">
        <p>Historial</p>
        <div>
          <input
            type="text"
            value={search}
            onChange={searcher}
            className="buscador"
            placeholder="Buscar aqui"
          />
        </div>
      </div>
      <div className="table_section">
        <table>
          <thead>
            <tr>
              <th>Titutlo</th>
              <th>Ubicación</th>
              <th>Fecha</th>
              <th>Descripción</th>
            </tr>
          </thead>
          <tbody>
            {results.map((task) => (
              <tr key={task._id}>
                <td>{task.titulo}</td>
                <td>{task.ubicacion}</td>
                <td>{new Date(task.fecha).toLocaleDateString()}</td>
                <td>{task.descripcion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HistorialTable;
