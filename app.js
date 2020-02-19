// Importando as configurações do servidor
let app = require('./config/server.js');

// parametrização da porta de escuta

app.listen(80, function() {
    console.log('servidor online');
})