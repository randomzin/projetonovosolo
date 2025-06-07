const express = require("express");
const router = express.Router();

const reservaController = require("../controllers/reservaController");
const usuarioController = require("../controllers/usuarioController");

// Middleware para proteger rotas
function verificarLogin(req, res, next) {
  if (req.session.nome_usuario) {
    next();
  } else {
    res.redirect("/");
  }
}

// Rotas públicas
router.get("/", usuarioController.mostrarLogin);
router.post("/login", usuarioController.realizarLogin);

router.get("/registrar", usuarioController.mostrarCadastro);
router.post("/registrar", usuarioController.cadastrarUsuario);

// Rotas protegidas
router.get("/cadastro", verificarLogin, reservaController.mostrarCadastro);
router.post("/cadastro", verificarLogin, reservaController.criarReserva);

router.get("/reservas", verificarLogin, reservaController.listarReservas);

router.get("/logout", usuarioController.logout);

module.exports = router;
