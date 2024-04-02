const toCreate = (model) => {
    const horaEntrega = model.hora_entrega ? `'${model.hora_entrega}'` : 'NULL';
    const horaFim = model.hora_fim ? `'${model.hora_fim}'` : 'NULL';
    return `INSERT INTO pedidos VALUES (default,'${model.cliente}','${model.endereco}', '${model.produto}', CURRENT_DATE, CURRENT_TIME, ${horaEntrega}, ${horaFim}, '${model.id_entregador}')`;
}

const toRead = () => {
    return 'SELECT * FROM pedidos';
}

const toReadExec = () => {
    return 'SELECT * FROM vw_pedidos_execucao';
}

const toUpdateEntrega = (model) => {
    return `UPDATE pedidos SET hora_entrega = '${model.hora_entrega}' WHERE id_pedido = '${model.id_pedido}'`;
}

const toUpdateFim = (model) => {
    return `UPDATE pedidos SET hora_fim = '${model.hora_fim}' WHERE id_pedido = '${model.id_pedido}'`;
}

const toDelete = (model) => {
    return `DELETE FROM pedidos WHERE id_pedido = '${model.id_pedido}'`;
}

module.exports = {
    toCreate,
    toRead,
    toReadExec,
    toUpdateEntrega,
    toUpdateFim,
    toDelete
}