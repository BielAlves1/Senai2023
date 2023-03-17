const express = require('express');
const router = express.Router();

const Usuario = require("../controller/usuarios")
const Motorista = require("../controller/motoristas")
const Veiculos = require("../controller/veiculos")
const Operacao = require("../controller/operacoes")
const Manutencao = require("../controller/manutencoes")
const Middleware = require('../middleware/middleware')

router.get('/motorista', Motorista.read);
router.get('/veiculos', Veiculos.read);
router.get('/operacao', Operacao.read);
router.get('/manutencao', Manutencao.read);
router.get('/manutencaoOB', Manutencao.readOB)

router.post('/motorista', Motorista.create)
router.post('/manutencao', Manutencao.create)
router.post('/veiculos', Veiculos.create)
router.post('/operacao', Operacao.create)
router.post('/usuario', Usuario.create)
router.post('/login', Usuario.login)
router.post('/validarUser', Middleware.verificar)

router.delete('/motorista', Motorista.remove)
router.delete('/manutencao', Manutencao.remove)
router.delete('/veiculos', Veiculos.remove)
router.delete('/operacao', Operacao.remove)
router.delete('/delete', Middleware.validaAcesso, Usuario.remover)

router.put('/motorista', Motorista.update)
router.put('/manutencao', Manutencao.update)
router.put('/veiculos', Veiculos.update)
router.put('/veicDispT', Veiculos.updateDispTrue)
router.put('/veicDispF', Veiculos.updateDispFalse)
router.put('/operacao', Operacao.update)


module.exports = router;