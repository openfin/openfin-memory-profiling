var openfinLauncher = require('openfin-launcher');
var express = require('express');
var path = require('path');
var app = express();

// Define the port to run on
app.set('port', 8080);

app.use(express.static(path.join(__dirname, '../public')));

// Listen for requests
var server = app.listen(app.get('port'), function() {
    var port = server.address().port;
    console.log('Magic happens on port ' + port);
});

openfinLauncher.launchOpenFin({
    configPath: 'http://127.0.0.1:8080/app.json'
})
    
.then(function() {
    console.log('Launched App');
})
.fail(function(error) {
    console.log('Error launching App: ', error);
});