const express = require('express');
const router = express.Router();

const Entregador = require("../controllers/Entregadores.controller");

router.get("/entregadores/read", Entregador.listarEntregadores);
router.post("/entregadores/login", Entregador.login);
router.post("/entregadores/create", Entregador.cadastrarEntregador);
router.put("/entregadores/update/:id_entregador", Entregador.alterarEntregador);
router.delete("/entregadores/delete/:id_entregador", Entregador.excluirEntregador);

module.exports = router;