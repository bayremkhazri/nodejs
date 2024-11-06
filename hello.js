const fs =require("fs");

fs.readFile("./welcom.txt",(err,data)=>{
    err ? console.log(err): console.log(data.toString());
});