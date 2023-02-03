const express = require('express');
const router = express.Router();

const Venda = require('../controllers/Venda.controller');

router.get("/vendas/readAll", Venda.readAll);
router.get("/vendas/read/:data", Venda.read);
router.post("/vendas/create", Venda.create);

module.exports = router;