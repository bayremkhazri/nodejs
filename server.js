const { response } = require("express");
const http=require("http");

http.createServer((request,response)=> {
    response.end("hello node !!!")
}).listen(3000);