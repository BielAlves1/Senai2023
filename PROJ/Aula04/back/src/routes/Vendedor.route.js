const express = require('express');
const router = express.Router();

const Vendedor = require('../controllers/Vendedor.controller');

router.get("/vendedores/readAll", Vendedor.readAll);
router.get("/vendedores/read/:id_vendedor", Vendedor.read);
router.post("/vendedores/create", Vendedor.create);
router.put("/vendedores/update/:id_vendedor", Vendedor.update);
router.delete("/vendedores/delete/:id_vendedor", Vendedor.remove);

module.exports = router;