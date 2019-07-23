module.exports = require("../config/imports").express
                 .Router()
                 .post("/",(req,res)=>{
    var obj = require("../config/db_connection");
    var connection = obj.getConnection();
    connection.connect();
    require("../config/queries").update(connection,req,res);
});