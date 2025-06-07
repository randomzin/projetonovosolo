const Reserva = require("../models/reserva");

// Renderiza a página de login
exports.mostrarLogin = (req, res) => {
  res.render("login");
};

// Renderiza a página de cadastro de usuário ou reserva
exports.mostrarCadastro = (req, res) => {
  // Passa o nome do usuário logado para a view (para mostrar, por ex., "Olá, usuário")
  res.render("cadastro", { nome_usuario: req.session.nome_usuario });
};

// Processa o login
exports.realizarLogin = (req, res) => {
  const { nome_usuario } = req.body;

  // Cria a sessão do usuário
  req.session.nome_usuario = nome_usuario;

  // Redireciona para a página de cadastro de reservas
  res.redirect("/cadastro");
};

// Cria uma nova reserva
exports.criarReserva = async (req, res) => {
  const nome_usuario = req.session.nome_usuario;
  const { livro_reservado } = req.body;

  // Se não estiver logado, redireciona para login
  if (!nome_usuario) {
    return res.redirect("/");
  }

  try {
    // Chama o método do model para criar a reserva
    await Reserva.criar(nome_usuario, livro_reservado);
    res.redirect("/reservas");
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao criar reserva.");
  }
};

// Lista todas as reservas
exports.listarReservas = async (req, res) => {
  try {
    // Busca todas reservas no model
    const resultados = await Reserva.listar();

    // Renderiza a página com as reservas e passa o usuário logado
    res.render("reservas", { reservas: resultados, nome_usuario: req.session.nome_usuario });
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao listar reservas.");
  }
};
