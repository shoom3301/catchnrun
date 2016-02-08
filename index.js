/**
 * Created by shoom on 04.02.16.
 */

var http = require('http');

var server = http.createServer(function(request, response){
    response.end('CATCH N RUN');
});

server.listen(5000, function(){
    console.log("Server started");
});