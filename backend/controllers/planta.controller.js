const Planta = require("../models/planta");
const plantaCtrl = {};

plantaCtrl.getPlantas = async (req, res) => {
  const plantas = await Planta.find();
  res.json(plantas);
};
plantaCtrl.createPlanta = async (req, res) => {
  const planta = new Planta(req.body);
  try {
    await planta.save();

    res.json({
      code: 200,
      status: "Planta guardada",
    });
  } catch (error) {
    res.code(400);
    res.json({
      code: 400,
      status: error,
    });
  }
};
plantaCtrl.getUnicaPlanta = async (req, res) => {
  try {
    const plantaUnica = await Planta.findById(req.params.id);
    res.json(plantaUnica);
  } catch (error) {
    res.json({ code: 400, message: error });
  }
};
plantaCtrl.editarPlanta = async (req, res) => {
  const { id } = req.params;
  const plantaEdit = {
    nombre: req.body.nombre,
    especie: req.body.especie,
    descripcion: req.body.descripcion,
    fechaAdquisicion: req.body.fechaAdquisicion,
    estadoSalud: req.body.estadoSalud,
    ubicacion: req.body.ubicacion,
    riego: req.body.riego,
    luz: req.body.luz,
    fertilizacion: req.body.fertilizacion,
    ultimaPoda: req.body.ultimaPoda,
    observaciones: req.body.observaciones,
  };
  await Planta.findByIdAndUpdate(id, { $set: plantaEdit }, { new: true });
  res.json({ code: 200, status: "Planta Actualizada" });
};

plantaCtrl.eliminarPlanta = async (req, res) => {
  await Planta.findByIdAndDelete(req.params.id);
  res.json({ code: 200, status: "Planta Eliminada" });
};

module.exports = plantaCtrl;
