import User from "../models/user.model.js";

// Peticion para mostrar todos
export const getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
}

// Peticion para mostrar uno
export const getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({message: "User not found"});
    res.json(user);
};

// Peticion para eliminar
export const deleteUser = async (req, res) => {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({message: "User not found"});
    return res.sendStatus(204);
};

// Peticion para actualizar
export const updateUser = async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });
    if (!user) return res.status(404).json({message: "User not found"});
    res.json(user);
};