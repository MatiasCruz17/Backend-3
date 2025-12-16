# Backend 3
Proyecto final de Backend 3.
Está basado en el proyecto de referencia AdoptMe y tiene como objetivo la creación de API REST utilizando Node.js, Express y MongoDB, incorporando generación de datos mockeados y persistencia en base de datos.

El proyecto permite:
* Generar usuarios y mascotas mockeadas.
* Insertar datos mockeados en MongoDB de forma configurable.
* Gestionar usuariios y mascotas reales almacenados en la base de datos.
* Relacionar usuarios con mascotas.

Tecnologias usadas: 
Node.js
Express
MongoDB Atlas
Mongoose
dotenv
brypt

Para hacerlo funcionar:
1. Clonar el repositorio
2. Ejecutar npm install, para tener las dependencias.
3. Crea un archivo .env, para que puedas cargar tus propios datos.
4. Ejecuta node src/app.js para levantar el servidor en el puerto 8080.

Los endpoints del proyecto:
* GET /api/mocks/mockingpets, devuelve un array de 10 mascotas mockeadas.
* GET /api/mocks/mockingusers, devuelve un array de 50 usuarios
* POST /api/mocks/generateData, genera datos en Mongodb

Matías Cruz dueño de este modelo.
