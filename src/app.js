const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));

app.listen(3030, () => console.log('Servidor corriendo en http://localhost:3030'));

app.get("/", (req, res) => {
    let htmlPath = path.resolve(__dirname, "./views/index.html");
    res.sendFile(htmlPath)
})

