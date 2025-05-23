# Web Application Document - Projeto Individual - Módulo 2 - Inteli

**_Os trechos em itálico servem apenas como guia para o preenchimento da seção. Por esse motivo, não devem fazer parte da documentação final._**

## Nome do Projeto

#### Autor do projeto

## Sumário

1. [Introdução](#c1)
2. [Visão Geral da Aplicação Web](#c2)
3. [Projeto Técnico da Aplicação Web](#c3)
4. [Desenvolvimento da Aplicação Web](#c4)
5. [Referências](#c5)

<br>

## <a name="c1"></a>1. Introdução (Semana 01)

O sistema que será desenvolvido é uma plataforma de eventos com gerenciamento de inscrições, voltada para facilitar a criação, divulgação e administração de eventos, além de permitir que usuários se inscrevam de maneira simples e rápida. A proposta é construir uma aplicação web utilizando Node.js com Express.js no backend e Supabase como banco de dados PostgreSQL.

---

## <a name="c2"></a>2. Visão Geral da Aplicação Web

### 2.1. Personas (Semana 01 - opcional)

_Posicione aqui sua(s) Persona(s) em forma de texto markdown com imagens, ou como imagem de template preenchido. Atualize esta seção ao longo do módulo se necessário._

### 2.2. User Stories (Semana 01 - opcional)

_Posicione aqui a lista de User Stories levantadas para o projeto. Siga o template de User Stories e utilize a referência USXX para numeração (US01, US02, US03, ...). Indique todas as User Stories mapeadas, mesmo aquelas que não forem implementadas ao longo do projeto. Não se esqueça de explicar o INVEST de 1 User Storie prioritária._

---

## <a name="c3"></a>3. Projeto da Aplicação Web

### 3.1. Modelagem do banco de dados (Semana 3)

![image](https://res.cloudinary.com/dtxiyeitw/image/upload/v1747968338/Captura_de_tela_2025-05-22_234455_ympso1.png)

```bash
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

```

### 3.1.1 BD e Models (Semana 5)

### 3.1.1 BD e Models (Semana 5)

O sistema utiliza um banco de dados PostgreSQL hospedado na Supabase, com três entidades principais: **Usuários**, **Eventos** e **Inscrições**. Cada entidade foi mapeada por meio de Models que abstraem as operações com o banco de dados, organizadas em arquivos separados na pasta `models/`.

- **Usuário (`UsuarioModel`)**: Representa as pessoas cadastradas no sistema, contendo campos como `nome`, `email`, `senha` e `criado_em`. O Model implementa métodos para criar, listar, buscar por ID, atualizar e excluir usuários.

- **Evento (`EventoModel`)**: Representa eventos criados pelos usuários, contendo `titulo` e `organizador_id` (referência ao usuário organizador). O Model permite criar eventos, buscar todos ou por ID, atualizar título e excluir.

- **Inscrição (`InscricaoModel`)**: Representa a participação de usuários em eventos. Contém `usuario_id`, `evento_id` e `data_inscricao`. O Model fornece métodos para criar uma inscrição, listar todas, buscar por ID, atualizar a data de inscrição e deletar registros.

Os Models utilizam `async/await` e o módulo `pg` para interagir com o banco de dados de forma assíncrona. A separação dos Models facilita a manutenção e a reutilização do código, permitindo que a camada de serviços e controladores manipulem os dados sem lidar diretamente com SQL bruto.

### 3.2. Arquitetura (Semana 5)

![image](https://res.cloudinary.com/dtxiyeitw/image/upload/v1747968550/Captura_de_tela_2025-05-22_162845_rdobjy.png)

### 3.3. Wireframes (Semana 03 - opcional)

_Posicione aqui as imagens do wireframe construído para sua solução e, opcionalmente, o link para acesso (mantenha o link sempre público para visualização)._

### 3.4. Guia de estilos (Semana 05 - opcional)

_Descreva aqui orientações gerais para o leitor sobre como utilizar os componentes do guia de estilos de sua solução._

### 3.5. Protótipo de alta fidelidade (Semana 05 - opcional)

_Posicione aqui algumas imagens demonstrativas de seu protótipo de alta fidelidade e o link para acesso ao protótipo completo (mantenha o link sempre público para visualização)._

### 3.6. WebAPI e endpoints (Semana 05)

---

### **Usuários** (`/api/usuarios`)

| Método | Rota          | Descrição                    |
| ------ | ------------- | ---------------------------- |
| POST   | /usuarios     | Cria um novo usuário         |
| GET    | /usuarios     | Lista todos os usuários      |
| GET    | /usuarios/:id | Busca um usuário por ID      |
| PUT    | /usuarios/:id | Atualiza dados de um usuário |
| DELETE | /usuarios/:id | Remove um usuário do sistema |

---

### **Eventos** (`/api/eventos`)

| Método | Rota         | Descrição                   |
| ------ | ------------ | --------------------------- |
| POST   | /eventos     | Cria um novo evento         |
| GET    | /eventos     | Lista todos os eventos      |
| GET    | /eventos/:id | Busca um evento por ID      |
| PUT    | /eventos/:id | Atualiza dados de um evento |
| DELETE | /eventos/:id | Remove um evento do sistema |

---

### **Inscrições** (`/api/inscricoes`)

| Método | Rota            | Descrição                        |
| ------ | --------------- | -------------------------------- |
| POST   | /inscricoes     | Cria uma nova inscrição          |
| GET    | /inscricoes     | Lista todas as inscrições        |
| GET    | /inscricoes/:id | Busca uma inscrição por ID       |
| PUT    | /inscricoes/:id | Atualiza a data de uma inscrição |
| DELETE | /inscricoes/:id | Remove uma inscrição do sistema  |

---

### 3.7 Interface e Navegação (Semana 07)

_Descreva e ilustre aqui o desenvolvimento do frontend do sistema web, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar._

---

## <a name="c4"></a>4. Desenvolvimento da Aplicação Web (Semana 8)

### 4.1 Demonstração do Sistema Web (Semana 8)

_VIDEO: Insira o link do vídeo demonstrativo nesta seção_
_Descreva e ilustre aqui o desenvolvimento do sistema web completo, explicando brevemente o que foi entregue em termos de código e sistema. Utilize prints de tela para ilustrar._

### 4.2 Conclusões e Trabalhos Futuros (Semana 8)

_Indique pontos fortes e pontos a melhorar de maneira geral._
_Relacione também quaisquer outras ideias que você tenha para melhorias futuras._

## <a name="c5"></a>5. Referências

_Incluir as principais referências de seu projeto, para que o leitor possa consultar caso ele se interessar em aprofundar._<br>

---

---
