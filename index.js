var shoe = require('shoe');
var stream = shoe('/sync');
var Model = require('scuttlebutt/model');
var model = new Model();

stream.pipe(model.createStream()).pipe(stream);

window.model = model;
window.getModel = model.toJSON.bind(model);
