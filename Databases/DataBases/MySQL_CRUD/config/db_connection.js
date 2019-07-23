/*
    this file used to create and return mysql connection object
*/
module.exports = {
    getConnection    :   ()=>{
        return require("./imports").mysql
               .createConnection(require("./db_properties"));
    }
};