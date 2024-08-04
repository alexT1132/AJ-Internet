import { createContext, useContext, useState } from "react";
import { 
    getDispositivosRequest,
    getDispositivoRequest,
    createDispositivoRequest,
    updateDispositivoRequest,
    deleteDispositivoRequest
 } from "../api/dispositivos.js";

 const dispositivoContext = createContext();

 export const useDispositivo = () => {
    const context = useContext(dispositivoContext);

    if (!context) {
        throw new Error("useDispositivo must be used within a dispositivoProvider");
    }

    return context;

 }

 export function DispositivoProvider({ children }) {

    const [dispositivos, setDispositivos] = useState([]);

    const getDispositivos = async () => {
        try {
            const res = await getDispositivosRequest();
            setDispositivos(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    const createDispositivo = async (dispositivo) => {
        try {
            const res = await createDispositivoRequest(dispositivo);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteDispositivo = async (id) => {
        try {
            const res = await deleteDispositivoRequest(id);
            if (res.status === 204) setDispositivos(dispositivos.filter((dispositivo) => dispositivo._id !== id));
        } catch (error) {
            console.log(error);
        }
    }

    const getDispositivo = async (id) => {
        try {
            const res = await getDispositivoRequest(id);
            return res.data
        } catch (error) {
            console.log(error);
        }
    }

    const updateDispositivo = async (id, dispositivo) => {
        try {
            await updateDispositivoRequest(id, dispositivo);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <dispositivoContext.Provider value={{
            dispositivos,
            getDispositivos,
            createDispositivo,
            deleteDispositivo,
            getDispositivo,
            updateDispositivo,
        }} >
            {children}
        </dispositivoContext.Provider>
    )

 }