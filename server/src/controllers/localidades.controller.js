import Localidad from "../models/localidad.model.js";

export const getLocalidades = async (req, res) => {
  try {
    const localidades = await Localidad.find();
    res.json(localidades);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const createLocalidad = async (req, res) => {
  try {
    const { nombre } = req.body;

    const localidadFound = await Localidad.findOne({ nombre });
    if (localidadFound)
      return res.status(400).json(["La localidad ya esta registrada"]);

    const newLocalidad = new Localidad({ nombre });
    const savedLocalidad = await newLocalidad.save();
    res.json(savedLocalidad);
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const getLocalidad = async (req, res) => {
  try {
    const localidad = await Localidad.findById(req.params.id);
    if (!localidad)
      return res.status(404).json({ message: "Localidad no encontrada" });
  } catch (error) {
    return res.status(404).json({ message: "Localidad no encontrada" });
  }
};

export const deleteLocalidad = async (req, res) => {
  try {
    const localidad = await Localidad.findByIdAndDelete(req.params.id);
    if (!localidad)
      return res.status(404).json({ message: "Localidad no encontrada" });
    return res.status(204);
  } catch (error) {
    return res.status(404).json({ message: "Localidad no encontrada" });
  }
};

export const updateLocalidad = async (req, res) => {
  try {
    const localidad = await Localidad.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (!localidad)
      return res.status(404).json({ message: "Localidad no encontrada" });
    res.json(localidad);
  } catch (error) {
    return res.status(404).json({ message: "Localidad no encontrada" });
  }
};
