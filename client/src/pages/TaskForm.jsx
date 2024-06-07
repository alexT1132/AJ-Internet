import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTask } from "../context/TasksContext";

import { FaUserCircle, FaKey, FaUsers, FaServer, FaTicketAlt, FaPowerOff } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { BiTask } from "react-icons/bi";

import { useEffect } from "react";

import "../css/Dashboard.css";
import "../css/register.css";

function TaskForm() {

    const navigate = useNavigate();

    const params = useParams();

    const {register, handleSubmit, setValue, formState: { errors }} = useForm();

    const { logout } = useAuth();

    const { createTask, getTask, updateTask } = useTask()

    const onSubmit = handleSubmit((data) => {
        if (params.id) {
            updateTask(params.id, data);
        }else {
            createTask(data);
        }
        navigate('/task');
    })

    useEffect(() => {
        async function loadTask() {
            if (params.id) {
                const task = await getTask(params.id);
                console.log(task);
                setValue('titulo', task.titulo);
                setValue('descripcion', task.descripcion);
            }
        }
        loadTask();
    }, []);

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
                    <br /><br /><br />
                    <div className="form-register-title">
                        <h2>Nueva tarea</h2>
                    </div>
                    
                    <form className="register-form" onSubmit={onSubmit}>
                        {errors.titulo && (
                            <p className="hook-alert">El titulo es requerido</p>
                        )}
                        <input type="text" 
                        placeholder="Nombre"
                        {...register('titulo', {required: true})} 
                        className="input-form"
                        />

                        {errors.descripcion && (
                            <p className="hook-alert">La descripcion es requerida</p>
                        )}
                        <textarea 
                        className="input-form"
                        placeholder="Descripcion"
                        {...register('descripcion', {required: true})} 
                        style={{height: '110px'}} ></textarea>

                        <div className="register-boton">
                            <button type="submit" className="btn-register">Guardara</button>
                        </div>
                     </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TaskForm