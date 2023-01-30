const { PrismaClient } = require('@prisma/client'); 

const prisma = new PrismaClient();

const create = async (req, res) => {
    const tarefa = await prisma.tarefa.create({
        data: req.body
    });
    res.status(201).json(tarefa).end();
}

const readAll = async (req, res) => {
    const tarefa = await prisma.tarefa.findMany();
    res.status(200).json(tarefa).end();
}

const read = async (req, res) => {
    const tarefa = await prisma.tarefa.findUnique({
        where: {
            id: Number(req.params.id)
        }
    });
    res.status(200).json(tarefa).end();
}

const update = async (req, res) => {
    const tarefa = await prisma.tarefa.update({
        where: { 
            id: Number(req.params.id)
        },
        data: req.body
    });

    res.status(201).json(tarefa).end();
}

module.exports = {
    create,
    readAll,
    read,
    update
}