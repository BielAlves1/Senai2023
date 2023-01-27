const toCreate = (model) => {
    return `INSERT INTO tarefas VALUES (default, '${model.descricao}', curtime(), null, '1')`;
}

const toRead = () => {
    return 'SELECT * FROM tarefas';
}

const toUpdate = (model) => {
    return `UPDATE tarefas SET status = '${model.status}', hora_fim = curtime()
    WHERE id = '${model.id}'`;
}


module.exports = {
    toCreate,
    toRead,
    toUpdate
}