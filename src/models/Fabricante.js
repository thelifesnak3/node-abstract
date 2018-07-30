const sequelize = require('sequelize')
const seq = require('../../config/db/postgres.js')

const Fabricante = seq.define('fabricante', {
    seq_fabricante: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nom_fabricante: sequelize.STRING,
    ind_status: {
        type: sequelize.CHAR,
        defaultValue: 'A'
    },
    cod_usuario_inclusao: sequelize.INTEGER,
    dth_inclusao: sequelize.NOW,
    cod_usuario_alteracao: sequelize.INTEGER,
    dth_alteracao: sequelize.NOW
    },{
    schema: 'estoque',
    tableName: 'fabricante',
    timestamps: false
});

module.exports = Fabricante
