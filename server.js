var shoe = require('shoe');
var http = require('http');
var Model = require('scuttlebutt/model');
require('browserify')('./index.js').bundle().pipe(require('fs').createWriteStream('./bundle.js'));
var ecstatic = require('ecstatic')(__dirname);

var server = http.createServer(ecstatic);
server.listen(9999);

var model = new Model();

setInterval(function () {
  model.set('thing', Math.random());
}, 1000);

var sock = shoe(function (stream) {
   stream.pipe(model.createStream()).pipe(stream);
});
sock.install(server, '/sync');
