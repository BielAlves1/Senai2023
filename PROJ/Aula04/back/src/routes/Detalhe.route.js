const express = require('express');
const router = express.Router();

const Detalhe = require('../controllers/Detalhe.controller');

router.get("/detalhes/readAll", Detalhe.readAll);
router.get("/detalhes/read/:id_detalhe", Detalhe.read);
router.post("/detalhes/create", Detalhe.create);
router.put("/detalhes/update/:id_detalhe", Detalhe.update);

module.exports = router;