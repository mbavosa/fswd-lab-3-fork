'use strict';

// code to test
var server = require('../lib/server');

// libraries
var request = require('supertest').agent,
  models = require('../models');

beforeAll(function() {
    models.sequelize.sync({ force: true });
});

it('should have a test', function() {
    expect(true).toBe(true);
});

describe('server', function() {
    var app;
    beforeEach(function() {
        app = request(server);
    });

    it('should respond with "Hello world!" on /', function() {
        return app
            .get('/')
            .expect(200, /Hello world!/);
    });

    // ['David', 'John', 'Lee'].forEach(function(name) {
    //     it('should respond with "Hello, ' + name + '!" on /' + name, function(done) {
    //         request(server)
    //             .get('/' + name)
    //             .expect(200, 'Hello, ' + name + '!', done);
    //     });
    // });

    // describe('users', function() {
    //     it('should register a user', function() {
    //         return app
    //             .post('/users/register')
    //             .type('form')
    //             .send({
    //                 username: 'MyUsername',
    //                 password: 'MyPassword',
    //                 password_confirm: 'MyPassword'
    //             })
    //             .expect(302)
    //             .expect('Location', '/users/welcome')
    //             .then(function() {
    //                 return app
    //                     .get('/users/welcome')
    //                     .expect(200, /Hi MyUsername!/);
    //             });
    //     })
    //     it('user already exists', function() {
    //         return app
    //             .post('/users/register')
    //             .type('form')
    //             .send({
    //                 username: 'MyUsername',
    //                 password: 'MyPassword',
    //                 password_confirm: 'MyPassword'
    //             })
    //                     .expect(200, /User already exists/);
    //     })
    //     it('passwords do not match', function() {
    //         return app
    //             .post('/users/register')
    //             .type('form')
    //             .send({
    //                 username: 'MyUsername',
    //                 password: 'MyPassword',
    //                 password_confirm: 'MyPasswordDifferent'
    //             })
    //                     .expect(200, /Register Error, password confirm does not match/);
    //     })
    //     it('user does not exist', function() {
    //         return app
    //             .post('/users/login')
    //             .type('form')
    //             .send({
    //                 username: 'MyUsername',
    //                 password: 'MyPassword',
    //             })
    //                     .expect(200, /User does not exist/);
    //     })
    //     it('incorrect password', function() {
    //         return app
    //             .post('/users/login')
    //             .type('form')
    //             .send({
    //                 username: 'MyUsername',
    //                 password: 'MyPasswordWrong',
    //             })
    //                     .expect(200, /Incorrect password/);
    //     })
    //     it('user is already logged in', function() {
    //         return app
    //             .post('/users/login')
    //             .type('form')
    //             .send({
    //                 username: 'MyUsername',
    //                 password: 'MyPassword',
    //             })
    //                     .expect(200, /You are logged in already/);
    //     })
    // });
});