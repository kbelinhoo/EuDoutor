const Sequelize = require('sequelize')
const sequelize = new Sequelize('projeto', 'root', '000000',{
    host: "localhost",
    dialect: 'mysql',
    query:{raw:true}
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}