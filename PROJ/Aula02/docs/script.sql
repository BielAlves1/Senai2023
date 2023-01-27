DROP DATABASE IF EXISTS listaTarefas;
CREATE DATABASE listaTarefas charset=UTF8 collate utf8_general_ci;
USE listaTarefas;

CREATE TABLE tarefas (
    id INTEGER NOT NULL PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(50) NOT NULL,
    hora_inicio TIME NOT NULL,
    hora_fim TIME,
    status VARCHAR(1) NOT NULL
);

describe tarefas;
show tables;

INSERT INTO tarefas VALUES
(DEFAULT, 'Limpar a casa', '09:00:00', '10:30:00', '2'),
(DEFAULT, 'Lavar o banheiro', '14:17:00', null, '1'),
(DEFAULT, 'Fazer o trabalho da escola', '16:00:00', '16:05:00', '3'),
(DEFAULT, 'Terminar projetin fullstack do Rennas', '08:00:00', '11:00:00', '2'),
(DEFAULT, 'Alimentar o Xãnin', curtime(), null, '1');

SELECT * FROM tarefas;