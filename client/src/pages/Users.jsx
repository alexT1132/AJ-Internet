import { Link } from "react-router-dom";
import { useEffect } from "react";

import { FaUserCircle, FaKey, FaUsers, FaServer, FaTicketAlt, FaPowerOff } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

import { useUser } from "../context/UsersContext";

import "../css/UsersTble.css";
import "../css/Dashboard.css";

function Users() {

    const { getUsers, users, deleteUser } = useUser();

    useEffect(() => {
        getUsers();
    }, [])

  return (
    <div className="container">
        <div className="topBar">
            <div className="logo">
                <h2>Administrador</h2>
            </div>
            <div className="search">
                <input type="hidden" id="search" placeholder="Search here" />
            </div>
            <div className="user">
                <FaUserCircle className="img" />
            </div>
        </div>
        <div className="sideBar">
            <ul>
                <li>
                    <Link to='/dashboard'>
                        <a>
                            <MdDashboard className="i" />
                            <div>Dashboard</div>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link to='/register'>
                        <a>
                            <FaKey className="i" />
                            <div>Autenticacion</div>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link>
                        <a>
                            <FaUsers className="i" />
                            <div>Usuarios</div>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link>
                        <a>
                            <FaServer className="i" />
                            <div>Dispositivos</div>
                        </a>
                    </Link>
                </li>
                <li>
                    <a>
                        <FaTicketAlt className="i" />
                        <div>Fichas</div>
                    </a>
                </li>
                <li>
                    <Link to='/task'>
                        <a>
                            <BiTask className="i" />
                            <div>Pendientes</div>
                        </a>
                    </Link>
                </li>
                <li>
                    <a href="">
                        <FaPowerOff className="i" />
                        <div>Cerrar session</div>
                    </a>
                </li>
            </ul>
        </div>
        <div className="main">
            <div className="table">
                <div className="table_header">
                    <p>Usuarios</p>
                    <div>
                        <input type="text" className="buscador" placeholder="Buscar aqui" />
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
                            {
                                users.map((user) => (
                                    <tr key={user._id}>
                                        <td>{user.nombre}</td>
                                        <td>{user.puesto}</td>
                                        <td>{user.no_trabajador}</td>
                                        <td>{user.role}</td>
                                        <td>
                                            <button onClick={() => {
                                                deleteUser(user._id);
                                            }} className="table-delete"><MdDelete className="delete" /></button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Users