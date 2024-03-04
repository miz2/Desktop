var http=require('http')
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write('<h1> Hello and welcome </h1>')
    res.write('<h1> Kaisa hai bhai</h1>')
    res.write('<h1> Bole jo koyal</h1>')
}).listen(8080)