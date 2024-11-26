// Exemplo: src/routes/kpi1.js

var express = require("express");
var router = express.Router();

var kpi3Controller = require("../controllers/kpi3Controller");

router.get("/listar", function (req, res) {
    kpi3Controller.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    kpi2Controller.listarPorUsuario(req, res);
});

module.exports = router; // Certifique-se de exportar o 'router' corretamente
