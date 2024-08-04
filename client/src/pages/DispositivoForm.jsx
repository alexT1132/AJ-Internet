import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useDispositivo } from "../context/DispositivosContext";
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
import { useEffect } from "react";

import "../css/Dashboard.css";
import "../css/register.css";

function DispositivoForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const { logout } = useAuth();

  const params = useParams();

  const navigate = useNavigate();

  const { createDispositivo, updateDispositivo, getDispositivo } =
    useDispositivo();

  const { localidades, getLocalidades } = useLocalidad();

  useEffect(() => {
    getLocalidades();
  }, []);

  useEffect(() => {
    async function loadDispositivo() {
      if (params.id) {
        const dispositivo = await getDispositivo(params.id);
        console.log(dispositivo);
        setValue("equipos", dispositivo.equipos);
        setValue("canal", dispositivo.canal);
        setValue("usuario", dispositivo.usuario);
        setValue("contraseña", dispositivo.contraseña);
        setValue("ip", dispositivo.ip);
        setValue("encargado_1", dispositivo.encargado_1);
        setValue("encargado_2", dispositivo.encargado_2);
        setValue("telefono", dispositivo.telefono);
        setValue("ubicacion", dispositivo.ubicacion);
        setValue("referencia", dispositivo.referencia);
      }
    }
    loadDispositivo();
  }, []);

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      updateDispositivo(params.id, data);
    } else {
      createDispositivo(data);
    }
    navigate("/dispositivos");
  });

  useEffect(() => {
    getLocalidades();
  }, []);

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
            <div className="form-register-title">
              <h2 style={{ textAlign: "center" }}>Nuevo dispositivo</h2>
            </div>

            <form className="register-form" onSubmit={onSubmit}>
              {errors.equipos && (
                <p className="hook-alert" style={{ textAlign: "center" }}>
                  El equipo es requerido
                </p>
              )}
              <input
                type="text"
                placeholder="Equipo"
                {...register("equipos", { required: true })}
                className="input-form"
              />

              {errors.canal && (
                <p className="hook-alert" style={{ textAlign: "center" }}>
                  El canal es requerido
                </p>
              )}
              <input
                type="text"
                placeholder="Canal"
                {...register("canal", { required: true })}
                className="input-form"
              />

              {errors.usuario && (
                <p className="hook-alert" style={{ textAlign: "center" }}>
                  El usuaio es requerido
                </p>
              )}
              <input
                type="text"
                placeholder="Usuario"
                {...register("usuario", { required: true })}
                className="input-form"
              />

              {errors.contraseña && (
                <p className="hook-alert" style={{ textAlign: "center" }}>
                  Contraseña es requerida
                </p>
              )}
              <input
                type="text"
                placeholder="Contraseña"
                {...register("contraseña", { required: true })}
                className="input-form"
              />

              {errors.ip && (
                <p className="hook-alert" style={{ textAlign: "center" }}>
                  Direccion ip es requerida
                </p>
              )}
              <input
                type="text"
                placeholder="Direccion Ip"
                {...register("ip", { required: true })}
                className="input-form"
              />

              {errors.encargado_1 && (
                <p className="hook-alert" style={{ textAlign: "center" }}>
                  El dato es requerido
                </p>
              )}
              <input
                type="text"
                placeholder="Encargado 1"
                {...register("encargado_1", { required: true })}
                className="input-form"
              />

              {errors.encargado_2 && (
                <p className="hook-alert" style={{ textAlign: "center" }}>
                  El dato es requerido
                </p>
              )}
              <input
                type="text"
                placeholder="Encargado 2"
                {...register("encargado_2", { required: true })}
                className="input-form"
              />

              {errors.telefono && (
                <p className="hook-alert" style={{ textAlign: "center" }}>
                  El dato es requerido
                </p>
              )}
              <input
                type="text"
                placeholder="Num. Telefono"
                {...register("telefono", { required: true })}
                className="input-form"
              />

              {errors.ubicacion && (
                <p className="hook-alert">Ubicacion es requerida</p>
              )}
              <select
                className="input-form"
                id="select"
                {...register("ubicacion", { required: true })}
              >
                <option value="" selected>
                  Selecciona la localidad
                </option>
                {localidades.map((localidad) => (
                  <option key={localidad.id}>{localidad.nombre}</option>
                ))}
              </select>

              {errors.referencia && (
                <p className="hook-alert" style={{ textAlign: "center" }}>
                  Escribe alguna referencia
                </p>
              )}
              <input
                type="text"
                placeholder="Referencia"
                {...register("referencia", { required: true })}
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

export default DispositivoForm;
