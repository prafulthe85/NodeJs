const http = require("http");

http.createServer((req,res)=>{
    res.write("Hello how are you");
    res.end();
}).listen(3000);