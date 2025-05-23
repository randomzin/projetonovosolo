const EventoService = require("../services/eventoService");

const EventoController = {
  async criar(req, res) {
    try {
      const { titulo, organizador_id } = req.body;
      const evento = await EventoService.criar(titulo, organizador_id);
      res.status(201).json(evento);
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  },

  async listar(req, res) {
    const eventos = await EventoService.listar();
    res.json(eventos);
  },

  async buscar(req, res) {
    const evento = await EventoService.buscarPorId(req.params.id);
    evento ? res.json(evento) : res.status(404).send();
  },

  async atualizar(req, res) {
    const { titulo } = req.body;
    const evento = await EventoService.atualizar(req.params.id, titulo);
    res.json(evento);
  },

  async deletar(req, res) {
    const sucesso = await EventoService.deletar(req.params.id);
    res.status(sucesso ? 204 : 404).send();
  },
};

module.exports = EventoController;
