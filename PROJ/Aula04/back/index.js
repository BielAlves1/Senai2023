const PORT = process.env.PORT || 5000
const express = require('express');
const cors = require('cors');

const app = express();

const SetorR = require('./src/routes/Setor.route');
const VendedorR = require('./src/routes/Vendedor.route');
const ProdutoR = require('./src/routes/Produto.route');

app.use(express.json());
app.use(cors());
app.use(SetorR);
app.use(VendedorR);
app.use(ProdutoR);

app.listen(5000, () => {
    console.log("Alô Alô, tamo RODANTE na porta: " + PORT);
});