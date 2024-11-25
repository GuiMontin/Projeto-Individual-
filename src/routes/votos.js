var express = require("express");
var router = express.Router();

var votoController = require("../controllers/votoController"); // Importa o controller responsável pela lógica



// Rota para registrar um voto
router.post("/votar/:nomeJogo", function (req, res) {
  votoController.votarPorNome(req, res); // Invoca a função da controller para registrar o voto
});

// Rota para buscar os votos atualizados
router.get("/ultimos", function (req, res) {
  votoController.obterVotosAtualizados(req, res); // Invoca a função da controller para buscar os votos
});

module.exports = router;