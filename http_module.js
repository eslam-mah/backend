const http = require('http');
const server = http.createServer((req, res)=> {
    console.log('server created');
if (req.url === '/') {
    res.write('Hello world');
    res.end();
}
else if ( req.url === '/api/eslam'){
    res.write(JSON.stringify({name:'eslam', id:1254, age:24}));
    res.end();
}
});
server.listen(3000);
console.log('server running');