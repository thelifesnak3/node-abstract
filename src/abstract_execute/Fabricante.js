module.exports = app => {
    
    const $abs = require('../../utils/Abstract.js')
    const Fabricante = require('../models/Fabricante.js')

    const F_abs = $abs.create(app, Fabricante, `${app.estoque_route_base}/fabricante`)

    F_abs.app.get(`${app.route_base}/teste`, (req, res) => {
        
        console.log("aaaaaaaaaaaaaaa")
        
    })

}