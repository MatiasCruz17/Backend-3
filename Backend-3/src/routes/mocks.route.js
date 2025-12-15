const express = require ('express');
const router = express.Router();
const { generateUsers } = require('../utils/mockingUsers');
const User = require('../models/User');
const Pet = require('../models/Pet');

router.get('/mockingpets', (req, res) => {
    const pets = [];
    const species = ['perro', 'gato', 'conejo', 'loro', 'hamster'];
    const names = ['Firulais', 'Michi', 'Copito', 'Lola', 'Toby', 'Nala', 'Rocky'];

    for (let i = 0; i < 10; i++){
        pets.push({
            name: names[Math.floor(Math.random() * names.length)],
            specie: species[Math.floor(Math.random() * species.length)],
            birthDate: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000),
            adopted: Math.random() > 0.5
        });
    }
    res.status(200).json({ status: 'success', payload: pets });
});

router.get('/mockingusers', (req, res) => {
    const users = generateUsers(50);
    res.status(200).json({ status: 'success', payload:users });
});

router.post ('/generateData', async (req, res) => {
    try {
        const { users = 0, pets = 0 } = req.body;

        if (typeof users !== 'number' || typeof pets !== 'number' || users < 0 || pets < 0 ) {
            return res.status(400).json({
                status: 'error',
                message: 'Los parametros "users" y "pets" deben ser numeros mayor o igual a 0'
            });
        }

        const userMocks = generateUsers(users);
        const savedUsers = users > 0 ? await User.insertMany(userMocks) : [];

        const petMocks = [];
        const species = ['perro', 'gato', 'conejo', 'loro'];
        const names = ['Boby', 'Luna', 'Max', 'Kiara', 'Tito'];

        for (let i = 0; i < pets; i++) {
            petMocks.push({
                name:names[Math.floor(Math.random() * names.length)],
                specie: species [Math.floor(Math.random() * species.length)],
                birthDate: new Date(Date.now() - Math.random() * 3 * 365 * 24 * 60 *1000 ),
                adopted: Math.random() > 0.7
            });
        }

        const savedPets = pets > 0 ? await Pet.insertMany(petMocks) : [];

        res.status(201).json({
            status: 'success',
            message: 'Datos generados e insertados correctamente',
            inserted: {
                users: savedUsers.length,
                pets: savedPets.length
            }
        });
    } catch (error){
        console.error('Error en /generateData:', error);
        res.status(500).json({
            status: 'error',
            message: 'Error al generar e insertar datos',
            error: error.message
        });
    }
});
module.exports = router;