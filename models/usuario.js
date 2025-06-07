const supabase = require("../config/db");
const bcrypt = require("bcrypt");

exports.cadastrar = async (nome_usuario, senha, callback) => {
  try {
    // Criptografa a senha antes de salvar
    const hash = await bcrypt.hash(senha, 10);

    const { data, error } = await supabase
      .from("usuarios")
      .insert([{ nome_usuario, senha: hash }]);

    if (error) return callback(error);
    callback(null, data);
  } catch (err) {
    callback(err);
  }
};

exports.login = async (nome_usuario, senha, callback) => {
  try {
    const { data, error } = await supabase
      .from("usuarios")
      .select("*")
      .eq("nome_usuario", nome_usuario)
      .single();

    if (error) return callback(error);

    // Verifica senha
    const senhaValida = await bcrypt.compare(senha, data.senha);
    if (!senhaValida) return callback(new Error("Senha incorreta"));

    callback(null, data);
  } catch (err) {
    callback(err);
  }
};
