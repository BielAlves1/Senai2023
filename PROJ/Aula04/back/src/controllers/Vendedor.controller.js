const { PrismaClient } = require('@prisma/client'); 

const prisma = new PrismaClient();

const create = async (req, res) => {
    const vendedor = await prisma.vendedor.create({
        data: req.body
    });
    res.status(201).json(vendedor).end();
}

const readAll = async (req, res) => {
    const vendedor = await prisma.vendedor.findMany();
    res.status(200).json(vendedor).end();
}

const read = async (req, res) => {
    const vendedor = await prisma.vendedor.findUnique({
        where: {
            id_vendedor: Number(req.params.id_vendedor)
        },
        select: {
            nome: true,
            salario: true
        }
    });
    res.status(200).json(vendedor).end();
}

const update = async (req, res) => {
    const vendedor = await prisma.vendedor.update({
        where: { 
            id_vendedor: Number(req.params.id_vendedor)
        },
        data: req.body
    });

    res.status(201).json(vendedor).end();
}

const remove = async (req, res) => {
    const vendedor = await prisma.vendedor.delete({
        where: {
            id_vendedor: Number(req.params.id_vendedor)
        }
    });
    res.status(200).json(vendedor).end();
}

module.exports = {
    create,
    readAll,
    read,
    update,
    remove
}