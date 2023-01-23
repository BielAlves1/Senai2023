const express = require('express');
const router = express.Router();

const Pedido = require("../controllers/Pedidos.controller");

router.get("/pedidos/read", Pedido.listarPedidos);
router.post("/pedidos/create", Pedido.cadastrarPedido);
router.put("/pedidos/update", Pedido.alterarPedido);
router.delete("/pedidos/delete/:id_pedido", Pedido.excluirPedido);

module.exports = router;