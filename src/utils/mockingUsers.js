const bcrypt = require('bcrypt');

const firstNames = ['Lucía', 'Martin', 'Sofía', 'Tomas', 'Valentina', 'Benjamin', 'Catalina', 'Facundo'];
const lastNames = ['Gonzalez', 'Rodriguez', 'Perez', 'Lopez', 'Sanchez', 'Gomez', 'Diaz', 'Fernandez'];
const emails = ['gmail.com', 'hotmail.com', 'outlook.com'];

function generateRandomUser(index){
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${index}@${emails[Math.floor(Math.random() * emails.length)]}`;
    const age = Math.floor(Math.random() * 50) + 18;
    const role = Math.random() > 0.8 ? 'admin' : 'user';
    const password = bcrypt.hashSync ('coder123', 10);

    return {
        first_name: firstName,
        last_name: lastName,
        email,
        age,
        password,
        role,
        pets: []
    };
}

function generateUsers(count) {
    const users = [];
    for (let i = 1; i <= count; i++) {
        users.push(generateRandomUser(i));
    }
    return users;
}

module.exports = { generateUsers };