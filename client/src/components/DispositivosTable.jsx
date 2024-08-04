import { useEffect, useState } from "react";
import { useDispositivo } from "../context/DispositivosContext";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";

function DispositivosTable() {
  const { dispositivos, getDispositivos, deleteDispositivo } = useDispositivo();

  const [search, setSearch] = useState("");

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  let results = [];

  if (!search) {
    results = dispositivos;
  } else {
    results = dispositivos.filter((dato) =>
      dato.equipos.toLowerCase().includes(search.toLocaleLowerCase())
    );
  }

  useEffect(() => {
    getDispositivos();
  }, []);

  return (
    <div className="table">
      <div className="table_header">
        <p>Dispositivos</p>
        <div>
          <input
            type="text"
            value={search}
            onChange={searcher}
            className="buscador"
            placeholder="Buscar aqui"
          />
          <Link to="/dispositivos_new">
            <button className="add_new">+ Añadir</button>
          </Link>
        </div>
      </div>
      <div className="table_section">
        <table>
          <thead>
            <tr>
              <th>Equipos</th>
              <th>Canal</th>
              <th>Usuario</th>
              <th>Contraseña</th>
              <th>Direccion IP</th>
              <th>Encargado 1</th>
              <th>Encargado 2</th>
              <th>Telefono</th>
              <th>Ubicacion</th>
              <th>Referencia</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {results.map((dispositivo) => (
              <tr key={dispositivo._id}>
                <td>{dispositivo.equipos}</td>
                <td>{dispositivo.canal}</td>
                <td>{dispositivo.usuario}</td>
                <td>{dispositivo.contraseña}</td>
                <td>{dispositivo.ip}</td>
                <td>{dispositivo.encargado_1}</td>
                <td>{dispositivo.encargado_2}</td>
                <td>{dispositivo.telefono}</td>
                <td>{dispositivo.ubicacion}</td>
                <td>{dispositivo.referencia}</td>
                <td>
                  <button
                    onClick={() => {
                      deleteDispositivo(dispositivo._id);
                    }}
                    className="table-delete"
                  >
                    <MdDelete className="delete" />
                  </button>

                  <Link to={`/dispositivos/${dispositivo._id}`}>
                    <button className="btn-edit">
                      <MdEdit className="edit" />
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DispositivosTable;
