const express = require("express");
const path = require("path");
const session = require("express-session");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(session({
  secret: "livros123",
  resave: false,
  saveUninitialized: true
}));

const rotas = require("./routes/index");
app.use("/", rotas);

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
