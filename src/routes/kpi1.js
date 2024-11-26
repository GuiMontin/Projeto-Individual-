// Exemplo: src/routes/kpi1.js

var express = require("express");
var router = express.Router();

var kpiController = require("../controllers/kpi1Controller");

router.get("/listar", function (req, res) {
    kpiController.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    kpiController.listarPorUsuario(req, res);
});

module.exports = router; // Certifique-se de exportar o 'router' corretamente
