// Import do módulo dos módulos
let express = require('express');
let consign = require('consign');
let bodyParser = require('body-parser');
let expressValidator = require('express-validator');

// Iniciando o objeto express
let app = express();

// Setando as configurações de view app
app.set('view engine', 'ejs');
app.set('views', './app/views');

// Configuração do middleware
app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}));
const { check, validationResult } = expressValidator;
app.use(check());

//configurando o autoload das rotas, models e controllers pelo consign
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app);

// Exportando o objeto para o Entry Point do projeto
module.exports = app;