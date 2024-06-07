import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

import { FaUserCircle, FaKey, FaUsers, FaServer, FaTicketAlt, FaPowerOff } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { BiTask } from "react-icons/bi";

import "../css/Dashboard.css";
import "../css/register.css";

function Register() {

    const {register, handleSubmit, reset, formState: { errors }} = useForm();

    const {signup, errors: registerErrors, logout} = useAuth();

    const onSubmit = handleSubmit( async (values) => {
        signup(values);
        reset();
    })

  return (
    <div className="container">
        <div className="topBar">
            <div className="logo">
                <h2>Administrador</h2>
            </div>
            <div className="search">
                <input type="hidden" id="search"
                placeholder="Search here" />
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
            <div className="form-register">
                <div className="form-register-contenedor">
                    <div className="form-register-title">
                        <h2>Registro de datos</h2>
                    </div>
                    {
                        registerErrors.map((error, i) => {
                            <div className="alert-register" key={i}>
                                {error}
                            </div>
                        })
                    }
                    <form className="register-form" onSubmit={onSubmit}>
                        {errors.nombre && (
                            <p className="hook-alert">Nombre es requerido</p>
                        )}
                        <input type="text" 
                        placeholder="Nombre"
                        {...register('nombre', {required: true})} 
                        className="input-form" 
                        />

                        {errors.puesto && (
                            <p className="hook-alert">Puesto es requerido</p>
                        )}
                        <input type="text" 
                        placeholder="Puesto"
                        {...register('puesto', {required: true})} 
                        className="input-form" 
                        />

                        {errors.no_trabajador && (
                            <p className="hook-alert">Numero es requerido</p>
                        )}
                        <input type="text" 
                        placeholder="No. de trabajador"
                        {...register('no_trabajador', {required: true})}  
                        className="input-form" 
                        />

                        {errors.contraseña && (
                            <p className="hook-alert">Contraseña es requerido</p>
                        )}
                        <input type="text" 
                        placeholder="Contraseña" 
                        {...register('contraseña', {required: true})} 
                        className="input-form" 
                        />

                        {errors.role && (
                            <p className="hook-alert">Role es requerido</p>
                        )}
                        <select className="input-form" id="select" {...register('role', {required: true})} >
                            <option value='' selected>Selecciona el role</option>
                            <option value="administrador">Administrador</option>
                            <option value="trabajador">Trabajador</option>
                        </select>
                        <div className="register-boton">
                            <button type="submit" className="btn-register">Registrar</button>
                        </div>
                     </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register