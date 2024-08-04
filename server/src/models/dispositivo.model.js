import mongoose from "mongoose";

const dispositivoSchema = new mongoose.Schema({
  equipos: {
    type: String,
    required: true,
  },
  canal: {
    type: String,
    required: true,
  },
  usuario: {
    type: String,
    required: true,
  },
  contraseña: {
    type: String,
    required: true,
  },
  ip: {
    type: String,
    required: true,
  },
  encargado_1: {
    type: String,
    required: true,
  },
  encargado_2: {
    type: String,
    required: true,
  },
  telefono: {
    type: String,
    required: true,
  },
  ubicacion: {
    type: String,
    required: true,
  },
  referencia: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Dispositivo", dispositivoSchema);
