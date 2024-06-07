import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const register = async (req, res) => {
    const {nombre, puesto, no_trabajador, contraseña, role} = req.body;

    try {

        const userFound = await User.findOne({no_trabajador});
        if (userFound) return res.status(400).json(["El numero ya esta en uso"]);

        const hash = await bcrypt.hash(contraseña, 10);

        const newUser = new User({
            nombre,
            puesto,
            no_trabajador,
            contraseña: hash,
            role,
        });

        const userSaved = await newUser.save();

        res.json({
            id: userSaved._id,
            nombre: userSaved.nombre,
            no_trabajador: userSaved.no_trabajador,
            role: userSaved.role,
        });

    } catch (error) {
        console.log(error);
    }
}

export const login = async (req, res) => {
    const {no_trabajador, contraseña} = req.body

    try {

        const userFound = await User.findOne({no_trabajador});
        if (!userFound) return res.status(400).json({message: "Usuario no encontrado"});

        const isMatch = await bcrypt.compare(contraseña, userFound.contraseña);
        if (!isMatch) return res.status(400).json({message: "Contraseña incorrecta"});


        if (userFound.role === 'administrador') {
            const token = await createAccessToken({id: userFound._id});

                res.cookie('token', token);
                res.json({
                id: userFound._id,
                nombre: userFound.nombre,
                no_trabajador: userFound.no_trabajador,
                role: userFound.role
            });

        } else if (userFound.role === 'trabajador') {
            const token = await createAccessToken({id: userFound._id});

                res.cookie('token', token);
                res.json({
                id: userFound._id,
                nombre: userFound.nombre,
                no_trabajador: userFound.no_trabajador,
                role: userFound.role
            });
        }
    
        
    } catch (error) {
        console.log(error);
    }
}

export const logout = async (req, res) => {
    res.cookie("token", "", {
        expires: new Date(0),
    });
    return res.sendStatus(200);
}

export const profile = async (req, res) => {
    const userFound = await User.findById(req.user.id);

    if (!userFound) return res.status(400).json({message: "Usuario no encontrado"});

    return res.json({
        id: userFound._id,
        nombre: userFound.nombre,
        no_trabajador: userFound.no_trabajador,
        role: userFound.role,
    });
}

export const verifyToken = async (req, res) => {
    const {token} = req.cookies;

    if (!token) return res.status(401).json({ message: "Unauthorized" });

    jwt.verify(token, TOKEN_SECRET, async (err, user) => {
        if (err) return res.status(401).json({ message: "Unauthorized" });

        const userFound = await User.findById(user.id);
        if (!userFound) res.status(401).json({ message: "Unauthorized" });

        return res.json({
            id: userFound._id,
            nombre: userFound.nombre,
            no_trabajador: userFound.no_trabajador,
            role: userFound.role,
        });
    });
};