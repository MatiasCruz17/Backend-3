const express = require('express');
const mongoose = require ('mongoose');
require ('dotenv').config();

const mocksRouter = require ('./src/routes/mocks.router.js');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Conectado con MongoDB'))
    .catch(err => console.error('Error al conectar a MongoDB:', err));

app.use('/api/mocks', mocksRouter);

app.get('/', (req, res) => {
    res.json({
        message: 'Servidor de mocks funcionando',
        endpoints: {
            'GET /api/mocks/mockingpets': 'Devuelve 10 mascotas mockeadas',
            'GET /api/mocks/mockingusers': 'Devuelve 50 usuarios mockeados',
            'POST /api/mocks/generateData': 'Inserta X usuarios y mascotas en la BD'
        }
    });
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});