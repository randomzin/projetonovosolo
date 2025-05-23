const InscricaoService = require("../services/inscricaoService");

const InscricaoController = {
  async criar(req, res) {
    try {
      const { usuario_id, evento_id, data_inscricao } = req.body;
      const inscricao = await InscricaoService.criar(
        usuario_id,
        evento_id,
        data_inscricao
      );
      res.status(201).json(inscricao);
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  },

  async listar(req, res) {
    const inscricoes = await InscricaoService.listar();
    res.json(inscricoes);
  },

  async buscar(req, res) {
    const inscricao = await InscricaoService.buscarPorId(req.params.id);
    inscricao ? res.json(inscricao) : res.status(404).send();
  },

  async atualizar(req, res) {
    const { data_inscricao } = req.body;
    const inscricao = await InscricaoService.atualizar(
      req.params.id,
      data_inscricao
    );
    res.json(inscricao);
  },

  async deletar(req, res) {
    const sucesso = await InscricaoService.deletar(req.params.id);
    res.status(sucesso ? 204 : 404).send();
  },
};

module.exports = InscricaoController;
