const con = require('../dao/entregasDAO.js');
const Pedido = require('../models/Pedidos.model');


const listarPedidos = (req, res) => {
    con.query(Pedido.toRead(), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const cadastrarPedido = (req, res) => {
    con.query(Pedido.toCreate(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const alterarPedido = (req, res) => {
    con.query(Pedido.toUpdate(req.body), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(200).end();
            else
                res.status(404).end();
        else
            res.status(500).json(err).end();
    });
}

const excluirPedido = (req, res) => {
    con.query(Pedido.toDelete(req.params), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(204).json(req.params).end();
            else
                res.status(404).end();
        else
            res.status(400).json(err).end();
    })
}

module.exports = {
    listarPedidos,
    cadastrarPedido,
    alterarPedido,
    excluirPedido
}