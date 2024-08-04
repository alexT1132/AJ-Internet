import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useLocalidad } from "../context/LocalidadContext";

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

import "../css/Dashboard.css";
import "../css/register.css";

function LocalidadesForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { logout } = useAuth();

  const navigate = useNavigate();

  const { createLocalidad } = useLocalidad();


  const onSubmit = handleSubmit((data) => {
    createLocalidad(data);
    navigate("/localidades");
  });

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
        <div className="form-register">
          <div className="form-register-contenedor">
            <br /><br /><br /><br /><br />
            <div className="form-register-title">
              <h2 style={{ textAlign: "center" }}>Añadir localidad</h2>
            </div>

            <form className="register-form" onSubmit={onSubmit}>
              {errors.nombre && (
                <p className="hook-alert" style={{ textAlign: "center" }}>
                  El nombre es requerido
                </p>
              )}
              <input
                type="text"
                placeholder="Nombre"
                {...register("nombre", { required: true })}
                className="input-form"
              />

              <div className="register-boton">
                <button type="submit" className="btn-register">
                  Guardara
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocalidadesForm;
