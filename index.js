// Importar la librería
const express = require('express');

// Agrega
const PORT = 3000;

// Objetos para llamar los métodos de express
const app = express();

// Ruta inicial redirige a index.html
app.get('/', (req, resp) => {
    resp.sendFile(__dirname + '/index.html');
});

// Ruta de archivos estáticos
app.use(express.static('public'));

// Escucha conexiones en el puerto 3000 y muestra por consola la dirección web.
app.listen(PORT, () => console.log(`http://52.4.194.214:${PORT}`));