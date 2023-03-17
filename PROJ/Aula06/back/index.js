const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 5000

const router = require('./src/routes/routes.js');

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(5000, () => {
    console.log("Alô Alô, tamo RODANTE na porta: " + PORT);
});