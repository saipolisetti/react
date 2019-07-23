module.exports = require("../config/imports").express.Router()
                 .get("/",(req,res)=>{
    let mssql = require("../config/imports").mssql;
    mssql.connect(require("../config/db_properties"),(err)=>{
        if(err)
            throw err;
        else{
            let request = new mssql.Request();
            request.query(`select * from products`,
                                            (err,records)=>{
                if(err)
                    throw err;
                else
                    res.send(records.recordset);
                mssql.close();
            });
        }
    });
});