const express = require('express');
const mongoose = require ('mongoose');
require ('dotenv').config();

const mocksRouter = require ('./routes/mocks.route.js');
const usersRouter = require ('./routes/users.route.js');
const petsRouter = require ('./routes/pets.route.js');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Conectado con MongoDB'))
    .catch(err => console.error('Error al conectar a MongoDB:', err));

    app.use('/api/mocks', mocksRouter);
    app.use('/api/users', usersRouter);
    app.use('/api/pets', petsRouter);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});