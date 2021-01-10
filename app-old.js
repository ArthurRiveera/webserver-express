const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });

    let salida = {
        nombre: 'Arturo',
        edad: 21,
        ur: req.url
    };
    res.write(JSON.stringify(salida));
    res.end();
}).listen(8080);

console.log('Escuchando puerto 8080');