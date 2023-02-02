const { PrismaClient } = require('@prisma/client'); 

const prisma = new PrismaClient();

const create = async (req, res) => {
    const setor = await prisma.setor.create({
        data: req.body
    });
    res.status(201).json(setor).end();
}

const readAll = async (req, res) => {
    const setor = await prisma.setor.findMany({
        select: {
            nome: true,
            comissao: true
        }
    });
    res.status(200).json(setor).end();
}

const read = async (req, res) => {
    let setor = await prisma.setor.findUnique({
        where: {
            id: Number(req.params.id)
        },
        select: {
            nome: true,
            comissao: true,
            vendedores: true,
            produtos: true,
        }
    });

    res.status(200).json(setor).end();
}

const update = async (req, res) => {
    const setor = await prisma.setor.update({
        where: { 
            id: Number(req.params.id)
        },
        data: req.body
    });

    res.status(201).json(setor).end();
}

module.exports = {
    create,
    readAll,
    read,
    update
}