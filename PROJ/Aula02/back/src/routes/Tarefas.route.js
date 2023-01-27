const express = require('express');
const router = express.Router();

const Tarefa = require("../controllers/Tarefas.controller");

router.get("/tarefas/read", Tarefa.listarTarefas);
router.post("/tarefas/create", Tarefa.cadastrarTarefa);
router.put("/tarefas/update", Tarefa.alterarTarefa);

module.exports = router;