'use strict';

var express = require('express'),
    morgan = require('morgan');

// Create the express application object
var app = express();

var bodyParser = require('body-parser');

// to extract form data from POST bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'pug');
app.set('views', './views');

/* istanbul ignore next */
if (process.env.NODE_ENV !== 'test') {
    // Setup the loggin format, depending on running environment
    app.use(morgan(process.env.NODE_ENV === 'development' ? 'dev' : 'combined'));
}

app.get('/', function(request, response) {
    response.render('index');
});

app.get('/:name', function(request, response) {
    response.render('name', {
        name: request.params.name,
        lastName: request.query.lastName
    });
});

app.post('/name-form', function(request, response) {
    response.redirect('/' + request.body.name);
});

// Add the static middleware, pointed at the ./public directory
app.use(express.static('public'));

// allow other modules to use the server
module.exports = app;
