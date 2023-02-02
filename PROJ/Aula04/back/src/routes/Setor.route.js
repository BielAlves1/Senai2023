const express = require('express');
const router = express.Router();

const Setor = require('../controllers/Setor.controller');

router.get("/setores/readAll", Setor.readAll);
router.get("/setores/read/:id", Setor.read);
router.post("/setores/create", Setor.create);
router.put("/setores/update/:id", Setor.update);

module.exports = router;