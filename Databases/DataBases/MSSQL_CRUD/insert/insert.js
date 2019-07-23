module.exports = require("../config/imports").express
                 .Router()
                 .post("/",(req,res)=>{
    let mssql = require("../config/imports").mssql;
    mssql.connect(require("../config/db_properties"),(err)=>{
        if(err)
            throw err;
        else{
            let request = new mssql.Request();
            request.query(`insert into products values(
            ${req.body.p_id},
            '${req.body.p_name}',
            ${req.body.p_cost})`,(err,result)=>{
                if(err)
                    res.send({insert:"fail"})
                else
                    res.send({insert:"success"});
                mssql.close();
            });
        }
    });
});