import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  puesto: {
    type: String,
    required: true,
  },
  no_trabajador: {
    type: String,
    required: true,
  },
  contraseña: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

export default mongoose.model("User", userSchema);
