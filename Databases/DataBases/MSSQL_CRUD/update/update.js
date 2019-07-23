module.exports = require("../config/imports").express
                 .Router()
                 .post("/",(req,res)=>{ 
    let mssql = require("../config/imports").mssql;           mssql.connect(require("../config/db_properties"),(err)=>{
        if(err)
            throw err;
        else{
            let request = new mssql.Request();
            request.query(`update products set p_name='${req.body.p_name}',p_cost=${req.body.p_cost} where p_id=${req.body.p_id}`,(err,result)=>{
                if(err)
                    res.send({update:'fail'});
                else
                    res.send({update:'success'});
                mssql.close();
            });
        }
    });
});