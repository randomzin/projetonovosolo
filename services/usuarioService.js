const UsuarioModel = require("../models/usuarioModel");

const UsuarioService = {
  criar: UsuarioModel.criar,
  listar: UsuarioModel.listar,
  buscarPorId: UsuarioModel.buscarPorId,
  atualizar: UsuarioModel.atualizar,
  deletar: UsuarioModel.deletar,
};

module.exports = UsuarioService;
