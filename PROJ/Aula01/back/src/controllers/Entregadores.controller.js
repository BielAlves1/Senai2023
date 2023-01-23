const con = require('../dao/entregasDAO.js');
const Entregador = require('../models/Entregadores.model');


const listarEntregadores = (req, res) => {
    con.query(Entregador.toRead(), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const cadastrarEntregador = (req, res) => {
    con.query(Entregador.toCreate(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const alterarEntregador = (req, res) => {
    con.query(Entregador.toUpdate(req.body), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(200).end();
            else
                res.status(404).end();
        else
            res.status(500).json(err).end();
    });
}

const excluirEntregador = (req, res) => {
    con.query(Entregador.toDelete(req.params), (err, result) => {
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
    listarEntregadores,
    cadastrarEntregador,
    alterarEntregador,
    excluirEntregador
}