const toCreate = (model) => {
    return `INSERT INTO entregadores VALUES (default,'${model.nome}','${model.email}', '${model.senha}', '${model.veiculo}')`;
}

const toRead = () => {
    return 'SELECT * FROM entregadores';
}

const toUpdate = (model) => {
    return `UPDATE entregadores SET 
    nome = '${model.nome}', 
    senha = '${model.senha}', 
    veiculo = '${model.veiculo}' 
    WHERE id_entregador = '${model.id_entregador}'`;
}

const toDelete = (model) => {
    return `DELETE FROM entregadores WHERE id_entregador = '${model.id_entregador}'`;
}

module.exports = {
    toCreate,
    toRead,
    toUpdate,
    toDelete
}