module.exports.startChat = function(application, req, res){
    let username = req.body;
    console.log(username);
    //req.assert('apelido', 'Nome ou apelido é obrigatório').isEmpty();
    req.assert('apelido', 'Nome ou apelido deve conter entre 3 e 15 caracteres').isLength({min: 3, max: 15});

    const errors = req.validationErrors();
    if(errors){
        res.render('index', {validacao : errors});
        return; //res.status(422).json({errors: errors.array()})
    }

    application.get('io').emit(
        'msg', 
        {apelido: username.apelido, mensagem: ' acabou de entrar no chat!'}
        );

    res.render('chat');
}