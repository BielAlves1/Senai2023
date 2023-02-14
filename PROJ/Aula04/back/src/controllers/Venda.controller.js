const { PrismaClient } = require('@prisma/client'); 

const prisma = new PrismaClient();

const create = async (req, res) => {
    const venda = await prisma.venda.create({
        data: req.body
    });
    res.status(201).json(venda).end();
}

const readAll = async (req, res) => {
    const venda = await prisma.venda.findMany();
    res.status(200).json(venda).end();
}

const read = async (req, res) => {
    const venda = await prisma.venda.findMany({
        where: {
            data: new Date(req.params.data)
        },
        select: {
            data: true,
            vendedor_id: true
        }
    });
    res.status(200).json(venda).end();
}

module.exports = {
    create,
    readAll,
    read
}