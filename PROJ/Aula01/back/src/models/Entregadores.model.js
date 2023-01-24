const toCreate = (model) => {
    return `INSERT INTO entregadores VALUES (default,'${model.nome}','${model.email}', '${model.senha}', '${model.veiculo}')`;
}

const toRead = () => {
    return 'SELECT * FROM entregadores';
}

const toLogin = (model) => {
    return `SELECT * FROM entregadores WHERE email = '${model.email}' and senha = '${model.senha}'`;
}

const toUpdate = (model) => {
    return `UPDATE entregadores SET senha = '${model.senha}'
    WHERE id_entregador = '${model.id_entregador}'`;
}

const toDelete = (model) => {
    return `DELETE FROM entregadores WHERE id_entregador = '${model.id_entregador}'`;
}

module.exports = {
    toCreate,
    toRead,
    toLogin,
    toUpdate,
    toDelete
}