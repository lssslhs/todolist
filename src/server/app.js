'use strict';

/**********************************************************
*                      Load Modules                      *
**********************************************************/

var express = require('express')
,   path = require('path')
,   fs = require('fs');

var favicon = require('serve-favicon')
,   logger = require('morgan')
,   cookieParser = require('cookie-parser')
,   bodyParser = require('body-parser')
,   compress = require('compression')
,   cors = require('cors');

var app = express()
,   routes;

var environment = process.env.NODE_ENV
,   port = process.env.PORT || 3007;

/**********************************************************
* Connect MongoDB, Bootstrap models and Config passport  *
**********************************************************/

var db_url = process.env.MONGODB_DB_URL || 'mongodb://127.0.0.1:27017/todolist';
require("mongoose").connect(db_url, function (err) {
if (err) {
  console.log(err, err.stack);
} else {
  console.log("Connected to mongodb.");
}
});

//get all models
var modelsPath = path.join(__dirname, "models");
fs.readdirSync(modelsPath).forEach(function(file) {
require(modelsPath + "/" + file);
});

/**********************************************************
*                     Configuration                      *
**********************************************************/


app.use(favicon(__dirname + '/favicon.ico'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(compress());
app.use(logger('dev'));
app.use(cors());

var route = require('./routes/index.js');
app.use('/api', route);

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render("error", {
      message: err.message,
      error: {}
    });
  });

console.log('About to crank up node');
console.log('PORT=' + port);
console.log('NODE_ENV=' + environment);

app.get('/ping', function(req, res, next) {
    console.log(req.body);
    res.send('pong');
});

switch (environment) {
    case 'build':
        console.log('** BUILD **');
        app.use(express.static('./build/'));
        app.use('/*', express.static('./build/index.html'));
        break;
    default:
        console.log('** DEV **');
        app.use(express.static('./src/client/'));
        app.use(express.static('./'));
        app.use(express.static('./tmp'));
        app.use('/*', express.static('./src/client/index.html'));
        break;
}

app.listen(port, function() {
    console.log('Express server listening on port ' + port);
    console.log('env = ' + app.get('env') +
                '\n__dirname = ' + __dirname +
                '\nprocess.cwd = ' + process.cwd());
});
