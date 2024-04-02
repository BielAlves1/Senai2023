const con = require('../dao/entregasDAO.js');
const Pedido = require('../models/Pedidos.model.js');


const listarPedidos = (req, res) => {
    con.query(Pedido.toRead(), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const listarPedidosExec = (req, res) => {
    con.query(Pedido.toReadExec(), (err, result) => {
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

const alterarPedidoHE = (req, res) => {
    const paramsAndBody = { ...req.params, ...req.body }; 
    con.query(Pedido.toUpdateEntrega(paramsAndBody), (err, result) => {
        if (err == null) {
            if (result.rowCount > 0) {
                res.status(200).json(paramsAndBody).end();
            } else {
                res.status(404).end();
            }
        } else {
            res.status(500).json(err).end();
        }
    });
};

const alterarPedidoHF = (req, res) => {
    const paramsAndBody = { ...req.params, ...req.body }; 
    con.query(Pedido.toUpdateFim(paramsAndBody), (err, result) => {
        if (err == null) {
            if (result.rowCount > 0) {
                res.status(200).json(paramsAndBody).end();
            } else {
                res.status(404).end();
            }
        } else {
            res.status(500).json(err).end();
        }
    });
};

const excluirPedido = (req, res) => {
    con.query(Pedido.toDelete(req.params), (err, result) => {
        if (err == null)
            if (result.rowCount > 0)
                res.status(200).json(req.params).end();
            else
                res.status(404).end();
        else
            res.status(400).json(err).end();
    })
}

module.exports = {
    listarPedidos,
    listarPedidosExec,
    cadastrarPedido,
    alterarPedidoHE,
    alterarPedidoHF,
    excluirPedido
}