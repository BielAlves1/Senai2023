const express = require('express');
const router = express.Router();

const Tarefa = require('../controllers/tarefas.js');

router.get("/tarefas/readAll", Tarefa.readAll);
router.get("/tarefas/read/:id", Tarefa.read);
router.post("/tarefas/create", Tarefa.create);
router.put("/tarefas/update/:id", Tarefa.update);

module.exports = router;