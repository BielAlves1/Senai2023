-- DROP DATABASE IF EXISTS entregas;
-- CREATE DATABASE entregas charset=UTF8 collate utf8_general_ci;
-- No PostgreSQL, a criação do banco de dados normalmente é feita fora do script SQL.
-- Você pode criar o banco de dados usando ferramentas como pgAdmin ou usando o comando CREATE DATABASE no console do PostgreSQL.

-- USE entregas;
-- No PostgreSQL, a mudança de banco de dados não é necessária dentro do script SQL.

CREATE TABLE entregadores (
    id_entregador SERIAL PRIMARY KEY,
    nome VARCHAR(30) NOT NULL,
    email VARCHAR(30) NOT NULL,
    senha VARCHAR(30) NOT NULL,
    veiculo VARCHAR(50) NOT NULL
);

CREATE TABLE pedidos(
    id_pedido SERIAL PRIMARY KEY,
    cliente VARCHAR(30) NOT NULL,
    endereco VARCHAR(100) NOT NULL,
    produto VARCHAR(30) NOT NULL,
    data DATE NOT NULL,
    hora_pedido TIME NOT NULL,
    hora_entrega TIME,
    hora_fim TIME,
    id_entregador INTEGER NOT NULL REFERENCES entregadores(id_entregador)
);

-- describe entregadores;
-- No PostgreSQL, você pode usar \d entregadores;

-- describe pedidos;
-- No PostgreSQL, você pode usar \d pedidos;

-- show tables;
-- No PostgreSQL, você pode listar tabelas com \dt;

COPY entregadores FROM 'C:/Users/USUARIO/Desktop/Gabriel/WorkSpace/Senai2023/PROJ/Aula01/docs/dados/entregadores.csv'
DELIMITER ';'
CSV HEADER;

SELECT * FROM entregadores;

COPY pedidos FROM 'C:/Users/USUARIO/Desktop/Gabriel/WorkSpace/Senai2023/PROJ/Aula01/docs/dados/pedidos.csv'
DELIMITER ';'
CSV HEADER;

SELECT * FROM pedidos;
