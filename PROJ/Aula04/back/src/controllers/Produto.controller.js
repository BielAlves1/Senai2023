const { PrismaClient } = require('@prisma/client'); 

const prisma = new PrismaClient();

const create = async (req, res) => {
    req.body.valor = Number(req.body.valor)
    const produto = await prisma.produto.create({
        data: req.body
    });
    res.status(201).json(produto).end();
}

const readAll = async (req, res) => {
    const produto = await prisma.produto.findMany({
        select: {
            id_produto: true,
            nome: true,
            valor: true,
            produto_id: true
        }
    });
    res.status(200).json(produto).end();
}

const read = async (req, res) => {
    const produto = await prisma.produto.findUnique({
        where: {
            id_produto: Number(req.params.id_produto)
        },
        select: {
            id_produto: true,
            nome: true,
            valor: true,
            produto_id: true
        }
    });
    res.status(200).json(produto).end();
}

const update = async (req, res) => {
    const produto = await prisma.produto.update({
        where: { 
            id_produto: Number(req.params.id_produto)
        },
        data: req.body
    });

    res.status(201).json(produto).end();
}

const remove = async (req, res) => {
    const produto = await prisma.produto.delete({
        where: {
            id_produto: Number(req.params.id_produto)
        }
    });
    res.status(200).json(produto).end();
}

module.exports = {
    create,
    readAll,
    read,
    update,
    remove
}