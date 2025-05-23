const db = require("../config/db");

const InscricaoModel = {
  async criar(usuario_id, evento_id, data_inscricao) {
    const res = await db.query(
      "INSERT INTO inscricoes (usuario_id, evento_id, data_inscricao) VALUES ($1, $2, $3) RETURNING *",
      [usuario_id, evento_id, data_inscricao]
    );
    return res.rows[0];
  },

  async listar() {
    const res = await db.query("SELECT * FROM inscricoes");
    return res.rows;
  },

  async buscarPorId(id) {
    const res = await db.query("SELECT * FROM inscricoes WHERE id = $1", [id]);
    return res.rows[0];
  },

  async atualizar(id, data_inscricao) {
    const res = await db.query(
      "UPDATE inscricoes SET data_inscricao = $1 WHERE id = $2 RETURNING *",
      [data_inscricao, id]
    );
    return res.rows[0];
  },

  async deletar(id) {
    const res = await db.query("DELETE FROM inscricoes WHERE id = $1", [id]);
    return res.rowCount > 0;
  },
};

module.exports = InscricaoModel;
