/*
    fetch the data from products table
*/
module.exports = require("../config/imports").express
                 .Router()
                 .get("/",(req,res)=>{
    var obj = require("../config/db_connection");
    var connection = obj.getConnection();
    connection.connect();
    require("../config/queries").fetch(connection,res);
});