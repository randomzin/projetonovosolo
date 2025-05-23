-- Tabela: usuarios
CREATE TABLE if not exists usuarios (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  nome VARCHAR,
  email VARCHAR UNIQUE,
  senha VARCHAR,
  criado_em TIMESTAMP
);

-- Tabela: eventos
CREATE TABLE if not exists eventos (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  titulo VARCHAR,
  organizador_id INTEGER REFERENCES usuarios(id)
);

-- Tabela: inscricoes
CREATE TABLE if not exists inscricoes (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  usuario_id INTEGER REFERENCES usuarios(id),
  evento_id INTEGER REFERENCES eventos(id),
  data_inscricao TIMESTAMP
);
