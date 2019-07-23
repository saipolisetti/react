module.exports = require("../config/imports").express
                 .Router()
                 .post("/",(req,res)=>{
    let mssql = require("../config/imports").mssql;
    mssql.connect(require("../config/db_properties"),(err)=>{
        if(err)
            throw err;
        else{
            let request = new mssql.Request();
            request.query(`delete from products where p_id=${req.body.p_id}`,(err,result)=>{
                if(err)
                    res.send({delete:'fail'});
                else
                    res.send({delete:'success'});
                mssql.close();
            });
        }
    });
});