const { Pool } = require('pg');

const con = new Pool({
  user: 'postgres', // Usuário do PostgreSQL
  host: 'localhost',
  database: 'entregas',
  password: 'root', // Senha do PostgreSQL
  port: 5432, // Porta padrão do PostgreSQL
});

module.exports = con;
