const PORT = process.env.PORT || 5000
const express = require('express');
const cors = require('cors');

const entregadorR = require('./src/routes/Entregadores.route');
const pedidoR = require('./src/routes/Pedidos.route');

const app = express();
app.use(express.json());
app.use(cors());
app.use(entregadorR);
app.use(pedidoR);

app.listen(5000, () => {
    console.log("Alô, tamo ON na porta: " + PORT);
});