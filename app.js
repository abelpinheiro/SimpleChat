// Importando as configurações do servidor
let app = require('./config/server.js');

// Parametrização da porta de escuta
let server = app.listen(80, function() {
    console.log('servidor online');
});

let io = require('socket.io').listen(server);

app.set('io', io);

// Criando conexão com o websocket
io.on('connection', function(socket){
    console.log('Usuário conectou');

    socket.on('disconnect', function(socket){
        console.log('Usuário desconectou');
    })
});