import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import logo from "../assets/AJ.png";

import "../css/Navbar.css";

function Navbar() {

    const { logout, user } = useAuth();

  return (
    <div className="container-nav">
        <nav className="navbar">
            <div className="logo-title">
                <img src={logo} className="logo-nav" />
                <h1 className="text-nav">Bienvenido {user.nombre}</h1>
            </div>
            <div className="logout-nav">
                <Link to='/' onClick={() => {logout()}} >
                    <button className="btn-nav">Cerrar session</button>
                </Link>
            </div>
        </nav>
    </div>
  )
}

export default Navbar