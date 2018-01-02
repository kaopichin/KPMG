//此模块是创建数据库连接的
const mongoose=require('mongoose');

module.exports=function () {
    return mongoose.createConnection('localhost','kdb');//数据库名kdb
}