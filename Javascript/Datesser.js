var http=require('http')
var MyModule=require('./MyDateTime')

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write('<h1> Hello and welcome </h1>')
    res.write('<h1> Kaisa hai bhai</h1>')
    res.write('<h1> Current Date and Time</h1>'+myModule.MyDateTime())
}).listen(8080)