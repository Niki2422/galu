// app.js
const express = require('express');
const app = express();
const path = require ('path');
const port = 3003;

// Servir archivos estáticos desde el directorio 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Ruta explícita para la raíz "/"
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/home.html'));
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
