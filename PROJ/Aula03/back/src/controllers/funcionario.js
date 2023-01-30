const { PrismaClient } = require('@prisma/client'); 

const prisma = new PrismaClient();

const create = async (req, res) => {
    var info = req.body
    info.nascimento = new Date(req.body.nascimento);

    const funcionario = await prisma.funcionario.create({
        data: info
    });
    res.status(201).json(funcionario).end();
}

const readAll = async (req, res) => {
    const funcionario = await prisma.funcionario.findMany();
    res.status(200).json(funcionario).end();
}

const read = async (req, res) => {
    const funcionario = await prisma.funcionario.findUnique({
        where: {
            id: Number(req.params.id)
        }
    });
    res.status(200).json(funcionario).end();
}

//Update com req.body
const update = async (req, res) => {
    const funcionario = await prisma.funcionario.update({
        where: { 
            id: Number(req.body.id)
        },
        data: req.body
    });

    res.status(201).json(funcionario).end();
}

//Update com req.params
const update2 = async (req, res) => {
    const funcionario = await prisma.funcionario.update({
        where: { 
            id: Number(req.params.id)
        },
        data: req.body
    });

    res.status(201).json(funcionario).end();
}

const remove = async (req, res) => {
    const funcionario = await prisma.funcionario.delete({
        where: {
            id: Number(req.params.id)
        }
    });
    res.status(200).json(funcionario).end();
}

module.exports = {
    create,
    readAll,
    read,
    update,
    update2,
    remove,
}