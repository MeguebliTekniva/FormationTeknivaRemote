const {createServer} =require('http');


//création serveur 
const server=createServer((req,res)=>{
res.writeHead(200,{'Content-Type':'text/plan'});
res.end('hello Tekniva');

});

server.listen(1250,()=>{console.log('votre adresse de serveur : http://localhost:1250')});