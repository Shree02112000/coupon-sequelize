const dbconfig = require("../config/db.conf.js");
const Sequelize =  require("Sequelize");
const sequelize= new Sequelize(dbconfig.DB,dbconfig.USER,dbconfig.PASSWORD,{
    host:dbconfig.HOST,
    dialect:dbconfig.dialect,
    pool:{
        max:dbconfig.pool.max,
        min:dbconfig.pool.min,
        acquire:dbconfig.pool.acquire,
        idle:dbconfig.pool.idle
    }
});
const db ={}    ;
db.Sequelize =Sequelize;
db.sequelize=sequelize;
db.sample=require("./sample.model.js")(sequelize,Sequelize);
module.exports=db;
