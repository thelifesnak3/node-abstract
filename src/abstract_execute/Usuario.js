module.exports = app => {
    
        const seq = require('../../config/db/postgres.js')
        const $abs = require('../utils/Abstract.js');
        const Usuario = require('../models/Usuario.js')(app);

        const U_abs = $abs.create(app, Usuario, `${app.usuario_route_base}`)

    }