const con = require('../dao/entregasDAO.js');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const Entregador = require('../models/Entregadores.model');


const listarEntregadores = (req, res) => {
    con.query(Entregador.toRead(), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end();
        } else {
            res.status(400).json(err).end();
        }
    })
}

const login = (req, res) => {
    const user = req.body;

    con.query(Entregador.toLogin(user), (err, result) => {
        if (err == null) {
            if (result.rows.length > 0) {
                if (user.email == result.rows[0].email && user.senha == result.rows[0].senha) {
                    let retorno = {
                        "id_entregador": result.rows[0].id_entregador,
                        "nome": result.rows[0].nome,
                        "email": result.rows[0].email,
                        "veiculo": result.rows[0].veiculo
                    }
                    jwt.sign(retorno, process.env.KEY, (err, token) => {
                        if (err == null) {
                            retorno["token"] = token;
                            res.status(200).json(retorno).end();
                        } else {
                            res.status(400).json(err).end();
                        }
                    });
                } else {
                    res.status(406).json(err).end();
                }
            } else {
                res.status(404).end();
            }
        } else {
            res.status(400).json(err).end();
        }
    });
};

const cadastrarEntregador = (req, res) => {
    con.query(Entregador.toCreate(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        } else {
            res.status(400).json(err).end();
        }
    })
}

const alterarEntregador = (req, res) => {
    const paramsAndBody = { ...req.params, ...req.body }; // Combina req.params e req.body
    con.query(Entregador.toUpdate(paramsAndBody), (err, result) => {
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


const excluirEntregador = (req, res) => {
    con.query(Entregador.toDelete(req.params), (err, result) => {
        if (err == null) {
            if (result.rowCount > 0) {
                res.status(200).json(req.params).end();
            } else {
                res.status(404).end();
            }
        } else {
            res.status(400).json(err).end();
        }
    });
};


module.exports = {
    listarEntregadores,
    login,
    cadastrarEntregador,
    alterarEntregador,
    excluirEntregador
}