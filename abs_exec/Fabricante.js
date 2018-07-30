module.exports = app => {
    
    const $abs = require('../src/utils/Abstract.js')
    const Fabricante = require('../src/models/Fabricante.js')

    const F_abs = $abs.create(app, Fabricante, `${app.estoque_route_base}/fabricante`)

}