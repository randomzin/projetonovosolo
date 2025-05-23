const express = require("express");
const router = express.Router();

const usuarioRoutes = require("./usuarioRoutes");
const eventoRoutes = require("./eventoRoutes");
const inscricaoRoutes = require("./inscricaoRoutes");

router.use("/usuarios", usuarioRoutes);
router.use("/eventos", eventoRoutes);
router.use("/inscricoes", inscricaoRoutes);

module.exports = router;
