module.exports = app => {
    
    const $abs = require('../utils/Abstract.js')
    const Fabricante = require('../src/models/Fabricante.js')

    const F_abs = $abs.create(app, Fabricante, `${app.estoque_route_base}/fabricante`)

    console.log(F_abs.app)

    // F_abs.app.get(`${app.route_base}/teste`, (req, res) => {
        
    //     console.log("aaaaaaaaaaaaaaa")
        
    // })

}