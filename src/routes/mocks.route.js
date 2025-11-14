const express = require ('express');
const router = express.Router();
const { generateUsers } = require('../utils/mockingUsers');
const User = require('../models/User');
const Pet = require('../models/Pet');

router.get('/mockingpets', (req, res) => {
    const pets = [];
    const species = ['perro', 'gato', 'conejo', 'loro', 'hamster'];
    const names = ['Firulais', 'Michi', 'Copito', 'Lola', 'Toby', 'Nala', 'Rocky'];

    
})