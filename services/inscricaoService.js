const InscricaoModel = require("../models/inscricaoModel");

const InscricaoService = {
  criar: InscricaoModel.criar,
  listar: InscricaoModel.listar,
  buscarPorId: InscricaoModel.buscarPorId,
  atualizar: InscricaoModel.atualizar,
  deletar: InscricaoModel.deletar,
};

module.exports = InscricaoService;
