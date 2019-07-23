/*
    to maintain all the modules
*/
//create json object
//json object contain "all modules imports"
//export the json object
//everyone can import json object
//module is the predefined object, used to export.
//require() used to import the modules
module.exports = {
    express       :      require("express"),
    mysql         :      require("mysql"),
    cors          :      require("cors"),
    bodyparser    :      require("body-parser")
};