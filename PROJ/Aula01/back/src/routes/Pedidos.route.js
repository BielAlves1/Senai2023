const express = require('express');
const router = express.Router();

const Pedido = require("../controllers/Pedidos.controller");

router.get("/pedidos/readAll", Pedido.listarPedidos);
router.get("/pedidos/read", Pedido.listarPedidosExec);
router.post("/pedidos/create", Pedido.cadastrarPedido);
router.put("/pedidos/update/entrega", Pedido.alterarPedidoHE);
router.put("/pedidos/update/fim", Pedido.alterarPedidoHF);
router.delete("/pedidos/delete/:id_pedido", Pedido.excluirPedido);

module.exports = router;