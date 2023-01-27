const PORT = process.env.PORT || 5000
const express = require('express');
const cors = require('cors');

const tarefasR = require('./src/routes/Tarefas.route');

const app = express();
app.use(express.json());
app.use(cors());
app.use(tarefasR);

app.listen(5000, () => {
    console.log("Alô Alô, tamo ON na porta: " + PORT);
});