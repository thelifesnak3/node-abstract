module.exports = app => {
    
    const $abs = require('../src/utils/Abstract.js')
    const Pessoa = require('../src/models/Pessoa.js')
    const U_abs = $abs.create(app, Pessoa, `${app.rh_route_base}/pessoa`)

}