const { PrismaClient } = require('@prisma/client'); 

const prisma = new PrismaClient();

const create = async (req, res) => {
    req.body.quantidade = Number(req.body.quantidade)
    const detalhe = await prisma.detalhe.create({
        data: req.body
    });
    res.status(201).json(detalhe).end();
}

const readAll = async (req, res) => {
    const detalhe = await prisma.detalhe.findMany();
    res.status(200).json(detalhe).end();
}

const read = async (req, res) => {
    const detalhe = await prisma.detalhe.findUnique({
        where: {
            id_detalhe: Number(req.params.id_detalhe)
        }
    });
    res.status(200).json(detalhe).end();
}

const update = async (req, res) => {
    const detalhe = await prisma.detalhe.update({
        where: { 
            id_detalhe: Number(req.params.id_detalhe)
        },
        data: req.body
    });

    res.status(201).json(detalhe).end();
}

module.exports = {
    create,
    readAll,
    read,
    update
}