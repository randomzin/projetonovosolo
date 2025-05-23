const db = require("../config/db");

const UsuarioModel = {
  async criar(nome, email, senha, criado_em) {
    const res = await db.query(
      "INSERT INTO usuarios (nome, email, senha, criado_em) VALUES ($1, $2, $3, $4) RETURNING *",
      [nome, email, senha, criado_em]
    );
    return res.rows[0];
  },

  async listar() {
    const res = await db.query("SELECT * FROM usuarios");
    return res.rows;
  },

  async buscarPorId(id) {
    const res = await db.query("SELECT * FROM usuarios WHERE id = $1", [id]);
    return res.rows[0];
  },

  async atualizar(id, nome, email, senha) {
    const res = await db.query(
      "UPDATE usuarios SET nome = $1, email = $2, senha = $3 WHERE id = $4 RETURNING *",
      [nome, email, senha, id]
    );
    return res.rows[0];
  },

  async deletar(id) {
    const res = await db.query("DELETE FROM usuarios WHERE id = $1", [id]);
    return res.rowCount > 0;
  },
};

module.exports = UsuarioModel;
