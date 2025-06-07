const supabase = require("../config/db");

exports.criar = async (nome_usuario, livro_reservado) => {
  const { data, error } = await supabase
    .from("reservas")
    .insert([{ nome_usuario, livro_reservado }]);

  if (error) throw error;
  return data;
};

exports.listar = async () => {
  const { data, error } = await supabase
    .from("reservas")
    .select("*")
    .order("data_reserva", { ascending: false });

  if (error) throw error;
  return data;
};
