//rest object
let app = require("./config/imports").express();
//bodyparser
let bodyparser = require("./config/imports").bodyparser;
//set the json as MIME Type
app.use(bodyparser.json());
//read the post parameters
app.use(bodyparser.urlencoded({extended:false}));
//cors
let cors = require("./config/imports").cors;
//enable cors
app.use(cors());
//use fetch module
app.use("/fetch",require("./fetch/fetch"));
//use insert module
app.use("/insert",require("./insert/insert"));
//use update module
app.use("/update",require("./update/update"));
//use delete module
app.use("/delete",require("./delete/delete"));
//assign the port 
app.listen(8080);
console.log("server listening the port no.8080");