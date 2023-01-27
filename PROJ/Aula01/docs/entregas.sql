DROP DATABASE IF EXISTS entregas;
CREATE DATABASE entregas charset=UTF8 collate utf8_general_ci;
USE entregas;

CREATE TABLE entregadores (
    id_entregador INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30) not null,
    email VARCHAR(30) not null,
    senha VARCHAR(30) not null,
    veiculo VARCHAR(50) not null
);

CREATE TABLE pedidos(
    id_pedido INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    cliente VARCHAR(30) NOT NULL,
    endereco VARCHAR(100) NOT NULL,
    produto VARCHAR(30) NOT NULL,
    data DATE NOT NULL,
    hora_pedido TIME NOT NULL,
    hora_entrega TIME,
    hora_fim TIME,
    id_entregador INTEGER NOT NULL,
    foreign key (id_entregador) references entregadores(id_entregador)
);

describe entregadores;
describe pedidos;

show tables;

LOAD DATA INFILE 'D:/Senai2023/PROJ/Aula01/docs/dados/entregadores.csv'
-- 'D:/Gabriel Alves/Senai2023/PROJ/Aula01/docs/dados/entregadores.csv' <-- sala
-- 'D:/Senai2023/PROJ/Aula01/docs/dados/entregadores.csv' <-- casa
INTO TABLE entregadores
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from entregadores;

LOAD DATA INFILE 'D:/Senai2023/PROJ/Aula01/docs/dados/pedidos.csv'
INTO TABLE pedidos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from pedidos;

create view vw_pedidos_execucao as
select id_pedido, cliente, endereco, produto, data, hora_pedido, hora_entrega, hora_fim, id_entregador
from pedidos
where hora_fim is null AND hora_entrega is null;

select * from vw_pedidos_execucao;

create view vw_pedidos_entrega as
select id_pedido, cliente, endereco, produto, data, hora_pedido, hora_entrega, hora_fim, id_entregador
from pedidos
where hora_fim is null AND hora_entrega is not null;

select * from vw_pedidos_entrega;