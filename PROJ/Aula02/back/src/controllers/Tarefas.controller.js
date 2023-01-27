const con = require('../dao/tarefasDAO.js');
const Tarefa = require('../models/Tarefa.model');

const listarTarefas = (req, res) => {
    con.query(Tarefa.toRead(), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const cadastrarTarefa = (req, res) => {
    con.query(Tarefa.toCreate(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const alterarTarefa = (req, res) => {
    con.query(Tarefa.toUpdate(req.body), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(200).end();
            else
                res.status(404).end();
        else
            res.status(500).json(err).end();
    });
}

module.exports = {
    listarTarefas,
    cadastrarTarefa,
    alterarTarefa
}