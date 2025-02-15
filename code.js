const http = require('http');

const server = http.createServer((req,res) =>{
    console.log(req.method,req.url,req.headers);
    res.statusCode=200;
   
    if(req.url==='/'){
        res.setHeader('context-type','text/html');
        res.write('<html>');
        res.write('<body><h1>Home</h1></body>');
        res.write('</html>');
    }
    else if(req.url==='/product'){
        res.setHeader('context-type','text/html');
        res.write('<html>');
        res.write('<body><h1>Join my product</h1></body>');
        res.write('</html>');
    }else{
    res.setHeader('context-type','text/html');
    res.write('<html>');
    res.write('<body><h1>Get</h1></body>');
    res.write('</html>');
    res.end();
    }
})

 const port = 4001;
server.listen(port ,()=>{
    console.log(`this server running on address http://localhost:${port}`)
})