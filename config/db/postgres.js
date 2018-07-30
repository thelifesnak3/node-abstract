const Sequelize = require('sequelize')
const config = require('config')
const {user, database, password, host, port, dialect, max, idleTimeoutMillis, schema} = config.get('sequelize')

const seq = new Sequelize(
    database, 
    user, 
    password, 
    {
        host: host, 
        dialect : dialect, 
        port: port,
        schema: schema, 
        logging: false,
        pool: {
            max: max,
            min: 0,
            idle: idleTimeoutMillis
        }
    });

module.exports = seq