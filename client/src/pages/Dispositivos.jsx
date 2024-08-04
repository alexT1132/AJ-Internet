import { Link } from "react-router-dom";

import {
  FaUserCircle,
  FaKey,
  FaUsers,
  FaServer,
  FaTicketAlt,
  FaPowerOff,
} from "react-icons/fa";
import { MdDashboard, MdHistory } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import { IoLocationSharp } from "react-icons/io5";

import DispositivosTable from "../components/DispositivosTable";

import "../css/UsersTble.css";
import "../css/Dashboard.css";

import { useAuth } from "../context/AuthContext";

function Dispositivos() {

  const { logout } = useAuth();

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
            <Link to="/dashboard">
              <a>
                <MdDashboard className="i" />
                <div>Dashboard</div>
              </a>
            </Link>
          </li>
          <li>
            <Link to="/register">
              <a>
                <FaKey className="i" />
                <div>Autenticacion</div>
              </a>
            </Link>
          </li>
          <li>
            <Link to="/users">
              <a>
                <FaUsers className="i" />
                <div>Usuarios</div>
              </a>
            </Link>
          </li>
          <li>
            <Link to="/history">
              <a>
                <MdHistory className="i" />
                <div>Historial</div>
              </a>
            </Link>
          </li>
          <li>
            <Link to="/dispositivos">
              <a>
                <FaServer className="i" />
                <div>Dispositivos</div>
              </a>
            </Link>
          </li>
          <li>
            <Link to="/localidades">
              <a>
                <IoLocationSharp className="i" />
                <div>Localidades</div>
              </a>
            </Link>
          </li>
          <li>
            <Link to="/fichas">
              <a>
                <FaTicketAlt className="i" />
                <div>Fichas</div>
              </a>
            </Link>
          </li>
          <li>
            <Link to="/task">
              <a>
                <BiTask className="i" />
                <div>Pendientes</div>
              </a>
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={() => {
                logout();
              }}
            >
              <a>
                <FaPowerOff className="i" />
                <div>Cerrar session</div>
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="main">
        <DispositivosTable />
      </div>
    </div>
  );
}

export default Dispositivos;
