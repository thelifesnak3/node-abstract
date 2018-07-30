module.exports = app => {
    
    const $abs = require('../utils/Abstract.js')
    const Usuario = require('../src/models/Usuario.js')
    
    const U_abs = $abs.create(app, Usuario, `${app.usuario_route_base}`)

}