import { useEffect, useState } from "react";
import { useLocalidad } from "../context/LocalidadContext";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";


function LocalidadTable() {

const {localidades, getLocalidades, deleteLocalidad} = useLocalidad();

const [search, setSearch] = useState("");


const searcher = (e) => {
    setSearch(e.target.value);
}

let results = []

if (!search) {
    results = localidades
}else{
    results = localidades.filter((dato) => dato.nombre.toLowerCase().includes(search.toLocaleLowerCase()))
}

useEffect(() => {
    getLocalidades();
}, [])

  return (
    <div className="table">
        <div className="table_header">
            <p>Localidades</p>
            <div>
                <input type="text" value={search} onChange={searcher} className="buscador" placeholder="Buscar aqui" />
                <Link to='/localidades-add'>
                 <button className="add_new">+ Añadir</button>
                </Link>   
            </div>
        </div>
        <div className="table_section">
        <table>
    <thead>
        <tr>
            <th>Nombre de la localidad</th>
            <th>Acciones</th>
        </tr>
    </thead>
    <tbody>
        {
            results.map((localidad) => (
                <tr key={localidad.id}>
                    <td>{localidad.nombre}</td>
                    <td>
                        <button 
                        onClick={() => {
                            deleteLocalidad(localidad._id)
                        }}
                        className="table-delete"
                        ><MdDelete className="delete" /></button>
                    </td>
                </tr>
            ))
        }
    </tbody>
    </table> 
        </div>
    </div>
  )
}

export default LocalidadTable