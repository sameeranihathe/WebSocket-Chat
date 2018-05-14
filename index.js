var express = require('express');
var socket = require('socket.io');

//app setup
var app = express();
var server = app.listen(4000, function(){
    console.log("listing to port 4000");
});

//static files
app.use(express.static('public'));

//socket setup
var io = socket(server);

io.on('connection', function(socket){
    console.log('socket connection made', socket.id);
});