/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* global __dirname */
var express = require('express');
var app = express();
var formidable = require('formidable');
var journaldb = require('./journaldb');

console.log(journaldb.getItemList());

function start() {
    app.use(express.static(__dirname + '/../public'));
    console.log('static directory: ' + __dirname + '/../public');

    app.get('/journal/list', function(request, response) {

        list = journaldb.getItemList();

        response.writeHead(200, {
            'Content-type' : 'application/json',
            'Access-Control-Allow-Origin' : '*'

        });
        response.end(JSON.stringify(list));
        console.log('Handled request for ' + JSON.stringify(list));
    });
    
    app.post('/journal/list', function(request, response) {
        var form = new formidable.IncomingForm();
        if (request.method.toLowerCase() === 'post') {
            // parse form data
            var form = new formidable.IncomingForm();
            form.parse(request, function (err, fields) {
                console.log('Handled request from ' + fields);
                journaldb.addItem(fields);
                
                response.writeHead(200, { 'Content-Type': 'application/json' });
                response.end(JSON.stringify({}));
            });
        }        
    });

    var port = 8080;
    app.listen(port);
    console.log('Listenening on port: ' + port);
}

module.exports = {
    start: start
};

