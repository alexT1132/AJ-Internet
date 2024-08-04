import mongoose from "mongoose";

const localidadSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
  },
});

export default mongoose.model("Localidad", localidadSchema);
