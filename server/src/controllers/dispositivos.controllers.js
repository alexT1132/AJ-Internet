import Dispositivo from "../models/dispositivo.model.js";

export const getDispositivos = async (req, res) => {
  try {
    const dispositivos = await Dispositivo.find();
    res.json(dispositivos);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const createDispositivo = async (req, res) => {
  try {
    const {
      equipos,
      canal,
      usuario,
      contraseña,
      ip,
      encargado_1,
      encargado_2,
      telefono,
      ubicacion,
      referencia,
    } = req.body;

    const newDispositivo = new Dispositivo({
      equipos,
      canal,
      usuario,
      contraseña,
      ip,
      encargado_1,
      encargado_2,
      telefono,
      ubicacion,
      referencia,
    });

    const savedDispositivo = await newDispositivo.save();
    res.json(savedDispositivo);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const getDispositivo = async (req, res) => {
  try {
    const dispositivo = await Dispositivo.findById(req.params.id);
    if (!dispositivo)
      return res.status(404).json({ message: "Dispositivo no encontrado" });
    res.json(dispositivo);
  } catch (error) {
    return res.status(404).json({ message: "Dispositivo no encontrado" });
  }
};

export const deleteDispositivo = async (req, res) => {
  try {
    const dispositivo = await Dispositivo.findByIdAndDelete(req.params.id);
    if (!dispositivo)
      return res.status(404).json({ message: "Dispositivo no encontrado" });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(404).json({ message: "Dispositivo no encontrado" });
  }
};

export const updateDispositivo = async (req, res) => {
  try {
    const dispositivo = await Dispositivo.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!dispositivo)
      return res.status(404).json({ message: "Dispositivo no encontrado" });
    res.json(dispositivo);
  } catch (error) {
    return res.status(404).json({ message: "Dispositivo no encontrado" });
  }
};
