import img from "../assets/undraw_server_cluster_jwwq.svg";
import logo from "../assets/AJ.png";

import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { FaUser, FaLock } from "react-icons/fa";

import "../css/Login.css";

function Login() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const { signin, errors: loginErrors, isAuthenticated, user } = useAuth();

  const navegation = useNavigate();


  const onSubmit = handleSubmit(data => {
    signin(data)
});

  useEffect(() => {
    if (isAuthenticated){
      if (user.role === 'administrador') {
        navegation('/dashboard');
      } else 
      if (user.role === 'trabajador') {
        navegation('/panel');
      }
    }
  }, [isAuthenticated])

  return (
    <div className="container-login">
      <div className="img">
        <img src={img} />
      </div>
      <div className="login-container">

        <form onSubmit={onSubmit}>
          <div className="container-logo">
            <img src={logo} className="logo" />
          </div>
          <h2>Bienvenido</h2>

          {
            loginErrors.map((error, i) => (
              <div className="alert-login" key={i}>
                {error}
              </div>
            ))
          }

          <div className="input-div one">
            <div className="i">
              <FaUser className="icon" />
            </div>

            <div>
              {errors.no_trabajador && (
                <p className="hook-alert-login">Numero es requerido</p>
              )}
              <input type="text"
              className="input"
              {...register("no_trabajador", {required: true})}
              placeholder="No. de trabajador" />
            </div>

          </div>
          <div className="input-div two">
            <div className="i">
              <FaLock className="icon" />
            </div>

            <div>
              {errors.contraseña && (
                <p className="hook-alert-login">Contraseña es requerida</p>
              )}
              <input type="password"
              className="input"
              {...register("contraseña", {required: true})}
              placeholder="Contraseña" />
            </div>

          </div>
          <input type="submit" className="btn" value="Ingresar" />
        </form>

      </div>
    </div>
  )
}

export default Login