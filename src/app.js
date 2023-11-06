const express = require('express');
const app = express();
const path = require('path');

app.use('/static', express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(3030, () => {
    console.log('Servidor corriendo en http://localhost:3030');
});