const supabase = require("../config/db");
const bcrypt = require("bcrypt");

exports.mostrarLogin = (req, res) => {
  res.render("login"); // renderiza login.ejs
};

exports.mostrarCadastro = (req, res) => {
  res.render("registrar"); // renderiza registrar.ejs
};

exports.cadastrarUsuario = async (req, res) => {
  const { nome_usuario, senha } = req.body;

  // Verifica se usuário já existe
  const { data: userExists, error } = await supabase
    .from("usuarios")
    .select("nome_usuario")
    .eq("nome_usuario", nome_usuario)
    .single();

  if (userExists) {
    return res.send("Usuário já existe. Tente outro nome.");
  }

  // Hashear senha
  const senha_hash = await bcrypt.hash(senha, 10);

  // Inserir usuário no banco
  const { error: insertError } = await supabase
    .from("usuarios")
    .insert([{ nome_usuario, senha: senha_hash }]);

  if (insertError) {
    return res.send("Erro ao registrar usuário.");
  }

  // Redireciona para login após cadastro
  res.redirect("/");
};

exports.realizarLogin = async (req, res) => {
  const { nome_usuario, senha } = req.body;

  // Busca usuário no banco
  const { data: user, error } = await supabase
    .from("usuarios")
    .select("*")
    .eq("nome_usuario", nome_usuario)
    .single();

  if (!user) {
    return res.send("Usuário ou senha inválidos.");
  }

  // Verifica senha
  const senhaValida = await bcrypt.compare(senha, user.senha);
  if (!senhaValida) {
    return res.send("Usuário ou senha inválidos.");
  }

  // Cria sessão
  req.session.nome_usuario = nome_usuario;
  res.redirect("/cadastro"); // página protegida após login
};

exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
};
