const express = require('express');
const router = express.Router();

const Produto = require('../controllers/Produto.controller');

router.get("/produtos/readAll", Produto.readAll);
router.get("/produtos/read/:id_produto", Produto.read);
router.post("/produtos/create", Produto.create);
router.put("/produtos/update/:id_produto", Produto.update);
router.delete("/produtos/delete/:id_produto", Produto.remove);

module.exports = router;