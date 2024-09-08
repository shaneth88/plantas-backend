const mongoose = require("mongoose");

const { Schema } = mongoose;

const PlantaSchema = new Schema({
  nombre: { type: String, required: true },
  especie: { type: String, required: true },
  descripcion: { type: String, required: true },
  fechaAdquisicion: { type: Date, required: true },
  estadoSalud: { type: String, required: true },
  ubicacion: { type: String, required: true },
  riego: { type: String, required: true },
  luz: { type: String, required: true },
  fertilizacion: { type: String, required: true },
  ultimaPoda: { type: Date, required: true },
  observaciones: { type: String, required: true },
});

module.exports = mongoose.model("Planta", PlantaSchema);
