const toCreate = (model) => {
    return `INSERT INTO pedidos VALUES (default,'${model.cliente}','${model.endereco}', '${model.produto}', curdate(), curtime(), '${model.hora_fim}')`;
}

const toRead = () => {
    return 'SELECT * FROM pedidos';
}

const toUpdate = (model) => {
    return `UPDATE pedidos SET 
    produto = '${model.produto}'
    WHERE id_pedido = '${model.id_pedido}'`;
}

const toDelete = (model) => {
    return `DELETE FROM pedidos WHERE id_pedido = '${model.id_pedido}'`;
}

module.exports = {
    toCreate,
    toRead,
    toUpdate,
    toDelete
}