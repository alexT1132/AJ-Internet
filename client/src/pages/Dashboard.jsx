import { FaUserCircle, FaKey, FaUsers, FaServer, FaTicketAlt, FaPowerOff } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { BiTask } from "react-icons/bi";

import "../css/Dashboard.css";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Dashboard() {

    const { logout } = useAuth();

  return (
    <div className="container-dash">
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
                    <Link to='/users'>
                        <a>
                            <FaUsers className="i" />
                            <div>Usuarios</div>
                        </a>
                    </Link>
                </li>
                <li>
                    <a>
                        <FaServer className="i" />
                        <div>Dispositivos</div>
                    </a>
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
                <Link to='/' onClick={() => {logout()}}>
                    <a>
                        <FaPowerOff className="i" />
                        <div>Cerrar session</div>
                    </a>
                </Link>
                </li>
            </ul>
        </div>
        <div className="main">

        </div>
    </div>
  )
}

export default Dashboard