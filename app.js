const { createPublicKey } = require('crypto');
const http = require('http');
// console.log(http);


http.createServer(function(req,res){
    res.end('<h1>ola</h1>');
}).listen(3000);  //  voce que indica a porta que vc deseja usar 

console.log('Meu servidor esta rodando');