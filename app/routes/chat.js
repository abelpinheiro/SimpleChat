module.exports = function(application) {
    application.post('/chat', function(req, res){
        application.app.controllers.chat.iniciaChart(application, req, res);
    });

    application.get('/chat', function(req, res){
        application.app.controllers.chat.iniciaChart(application, req, res);
    });
}