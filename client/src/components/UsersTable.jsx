import { useEffect, useState } from "react";
import { useUser } from "../context/UsersContext";
import { MdDelete } from "react-icons/md";

import Swal from "sweetalert2";

function UsersTable() {
  const { getUsers, users, deleteUser } = useUser();

  const [search, setSearch] = useState("");

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  let results = [];

  if (!search) {
    results = users;
  } else {
    results = users.filter((dato) =>
      dato.nombre.toLowerCase().includes(search.toLocaleLowerCase())
    );
    results = users.filter((dato) =>
      dato.puesto.toLowerCase().includes(search.toLocaleLowerCase())
    );
    results = users.filter((dato) =>
      dato.no_trabajador.toLowerCase().includes(search.toLocaleLowerCase())
    );
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="table">
      <div className="table_header">
        <p>Localidades</p>
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
              <th>Nombre</th>
              <th>Puesto</th>
              <th>No. Trabajador</th>
              <th>Role</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {results.map((user) => (
              <tr key={user._id}>
                <td>{user.nombre}</td>
                <td>{user.puesto}</td>
                <td>{user.no_trabajador}</td>
                <td>{user.role}</td>
                <td>
                  <button
                    onClick={() => {
                      Swal.fire({
                        title:
                          "¿Estas seguro que deseas eliminar este usuario?",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#20C122",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Confirmar",
                      }).then((result) => {
                        if (result.isConfirmed) {
                          deleteUser(user._id);
                          Swal.fire({
                            title: "Eliminado!",
                            text: "Usuario eliminado Correctamente.",
                            icon: "success",
                          });
                        }
                      });
                    }}
                    className="table-delete"
                  >
                    <MdDelete className="delete" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UsersTable;
