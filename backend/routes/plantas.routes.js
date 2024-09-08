const express = require("express");
const router = express.Router();
const plantaCtrl = require("../controllers/planta.controller");
const empleado = require("../models/planta");

router.get("/", plantaCtrl.getPlantas);
router.post("/", plantaCtrl.createPlanta);
router.get("/:id", plantaCtrl.getUnicaPlanta);
router.put("/:id", plantaCtrl.editarPlanta);
router.delete("/:id", plantaCtrl.eliminarPlanta);
module.exports = router;
