const UsuarioService = require("../services/usuarioService");

const UsuarioController = {
  async criar(req, res) {
    try {
      const { nome, email, senha, criado_em } = req.body;
      const usuario = await UsuarioService.criar(nome, email, senha, criado_em);
      res.status(201).json(usuario);
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  },

  async listar(req, res) {
    const usuarios = await UsuarioService.listar();
    res.json(usuarios);
  },

  async buscar(req, res) {
    const usuario = await UsuarioService.buscarPorId(req.params.id);
    usuario ? res.json(usuario) : res.status(404).send();
  },

  async atualizar(req, res) {
    const { nome, email, senha } = req.body;
    const usuario = await UsuarioService.atualizar(
      req.params.id,
      nome,
      email,
      senha
    );
    res.json(usuario);
  },

  async deletar(req, res) {
    const sucesso = await UsuarioService.deletar(req.params.id);
    res.status(sucesso ? 204 : 404).send();
  },
};

module.exports = UsuarioController;
