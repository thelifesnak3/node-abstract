const express = require('express');
const bodyParser = require('body-parser');
const bytes = require('bytes');
const config = require('config')
const app = express();
const index = require('./src/index.js')

// ROUTES BASE
app.route_base = '/management';
app.sistema_route_base = app.route_base + '/usuario';

// CONFIGURAÇÕES DE REQUISOÇÕES
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, User-Data");
  next();
});
app.use(bodyParser.json({limit: bytes('100mb')}));
app.use(bodyParser.urlencoded({limit: bytes('100mb'), extended: true }));


    

// Checando a conexão com o banco Postegres
const sequelize = require('./config/db/postgres')
const {port} = config.get('serve')
sequelize.authenticate()
    .then(() => {
        app.listen(port, () => {
            console.log(`SERVER PORT ${port}`)
        });
    })
    .catch(err => console.error('Unable to connect to the database:', err));