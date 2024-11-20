const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const path = require('path');
const app = express();
const fs = require('fs');
const ip = '34.231.2.162';
const port = 3006;

// Configuración de middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Servir archivos estáticos desde la carpeta `public`
app.use('/public', express.static(path.join(__dirname, 'public')));

// Configuración de conexión a MySQL con un pool
const pool = mysql.createPool({
    host: "formulario.cl2e6ce0m1wi.us-east-1.rds.amazonaws.com",
    database: "formulario",
    user: "admin",
    password: "dario123",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Manejo de la solicitud POST del formulario
app.post('/submit-form', (req, res) => {
    const { nombre, email, asunto, mensaje } = req.body;

    const query = 'INSERT INTO contacto (nombre, email, asunto, mensaje) VALUES (?, ?, ?, ?)';
    pool.query(query, [nombre, email, asunto, mensaje], (err, result) => {
        if (err) {
            console.error('Error al insertar datos: ' + err.stack);
            res.status(500).send('Ocurrió un error al procesar tu mensaje.');
            return;
        }

        // Redirigir al contacto.html después de un envío exitoso
        res.redirect('/public/html/contactanos.html');
    });
});

// Página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'inicio.html'));
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://${ip}:${port}`);
});