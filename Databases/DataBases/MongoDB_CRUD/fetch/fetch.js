module.exports = require("../config/imports").express
                 .Router()
                 .get("/",(req,res)=>{
    //mongodb module
    let mongodb = require("../config/imports").mongodb;
    //create the client
    let nareshIT = mongodb.MongoClient;
    //connect to database
    nareshIT.connect("mongodb://localhost:27017/mean",
                            (err,db)=>{
        db.collection("products").find().toArray((err,array)=>{
            //send the array to the client
            res.send(array);
        });
    });
});