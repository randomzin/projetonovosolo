const EventoModel = require("../models/eventoModel");

const EventoService = {
  criar: EventoModel.criar,
  listar: EventoModel.listar,
  buscarPorId: EventoModel.buscarPorId,
  atualizar: EventoModel.atualizar,
  deletar: EventoModel.deletar,
};

module.exports = EventoService;
