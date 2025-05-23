const express = require("express");
const router = express.Router();
const EventoController = require("../controllers/eventoController");

router.post("/", EventoController.criar);
router.get("/", EventoController.listar);
router.get("/:id", EventoController.buscar);
router.put("/:id", EventoController.atualizar);
router.delete("/:id", EventoController.deletar);

module.exports = router;
