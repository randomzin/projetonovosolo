const db = require("../config/db");

const EventoModel = {
  async criar(titulo, organizador_id) {
    const res = await db.query(
      "INSERT INTO eventos (titulo, organizador_id) VALUES ($1, $2) RETURNING *",
      [titulo, organizador_id]
    );
    return res.rows[0];
  },

  async listar() {
    const res = await db.query("SELECT * FROM eventos");
    return res.rows;
  },

  async buscarPorId(id) {
    const res = await db.query("SELECT * FROM eventos WHERE id = $1", [id]);
    return res.rows[0];
  },

  async atualizar(id, titulo) {
    const res = await db.query(
      "UPDATE eventos SET titulo = $1 WHERE id = $2 RETURNING *",
      [titulo, id]
    );
    return res.rows[0];
  },

  async deletar(id) {
    const res = await db.query("DELETE FROM eventos WHERE id = $1", [id]);
    return res.rowCount > 0;
  },
};

module.exports = EventoModel;
