const express = require("express");
const router = express.Router();
const InscricaoController = require("../controllers/inscricaoController");

router.post("/", InscricaoController.criar);
router.get("/", InscricaoController.listar);
router.get("/:id", InscricaoController.buscar);
router.put("/:id", InscricaoController.atualizar);
router.delete("/:id", InscricaoController.deletar);

module.exports = router;
