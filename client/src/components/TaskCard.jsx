import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { useTask } from "../context/TasksContext";
import { Link } from "react-router-dom";


import "../css/Dashboard.css";

function TaskCard({ task }) {

  const { deleteTask } = useTask();


  return (
    <div className='card'>
      <div className="card-content">
        <div className="number" >{task.titulo}</div>
        <div className="card-name">{task.descripcion}</div>
        <div className="card-name" >{new Date(task.fecha).toLocaleDateString()}</div>
      </div>
      <div className="icon-box">
          <button onClick={() => {
              deleteTask(task._id);
            }} className="btn-delete" ><MdDelete className="delete" /></button>
            <Link to={`/task/${task._id}`}>
              <button className="btn-edit" ><MdEdit className="edit" /></button>
            </Link>
      </div>
    </div>
  )
}

export default TaskCard