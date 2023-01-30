const express = require('express');
const router = express.Router();

const Funcionario = require('../controllers/funcionario.js');

router.get("/funcionarios/readAll", Funcionario.readAll);
router.get("/funcionarios/read/:id", Funcionario.read);
router.post("/funcionarios/create", Funcionario.create);
router.put("/funcionarios/update", Funcionario.update);
router.put("/funcionarios/update2/:id", Funcionario.update2);
router.delete("/funcionarios/delete/:id", Funcionario.remove);

module.exports = router;