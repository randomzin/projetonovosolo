const express = require("express");
const router = express.Router();
const UsuarioController = require("../controllers/usuarioController");

router.post("/", UsuarioController.criar);
router.get("/", UsuarioController.listar);
router.get("/:id", UsuarioController.buscar);
router.put("/:id", UsuarioController.atualizar);
router.delete("/:id", UsuarioController.deletar);

module.exports = router;
