const PORT = process.env.PORT || 5000
const express = require('express');
const cors = require('cors');

const app = express();

const router= require('./src/routes/route.js');

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(5000, () => {
    console.log("Alô Alô, tamo RODANTE na porta: " + PORT);
});