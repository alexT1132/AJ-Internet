import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    },
    fecha: {
        type: Date,
        default: Date.now,
    },
})

export default mongoose.model("Task", taskSchema);