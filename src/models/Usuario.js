const sequelize = require('sequelize')
const seq = require('../../config/db/postgres.js')

const Usuario = seq.define('usuario', {
    seq_usuario: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nom_usuario: sequelize.STRING,
    nom_senha: sequelize.STRING,
    nom_login: sequelize.STRING,
    ind_status: sequelize.CHAR,
    cod_grupo_usuario: sequelize.INTEGER,
    cod_pessoa: sequelize.INTEGER,
    nom_email: sequelize.STRING,
    num_telefone: sequelize.STRING,
    img_usuario: sequelize.STRING
    },{
    schema: 'sistema',
    tableName: 'usuario',
    timestamps: false
});

module.exports = Usuario
