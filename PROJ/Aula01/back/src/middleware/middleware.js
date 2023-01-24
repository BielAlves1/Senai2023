const jwt = require('jsonwebtoken');
require('dotenv').config();

const validarUser = (req, res, next) => {

    const token = req.headers.authorization;

    jwt.verify(token, process.env.KEY, (err, data) => {
        if(err != null){
            res.status(404).json(err).end();
        }else{
            if(req.body.id_entregador == data.id_entregador){
                next();
            }else{
                res.status(401).json({msg:"Erro de permissão"}).end();
            }
        }
    })
}

module.exports = {
    validarUser
}