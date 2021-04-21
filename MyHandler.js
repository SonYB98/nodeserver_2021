function start(res){
    let Body = 'Hello, world! <br> I am in the cloud class.'
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(Body);
    res.end();
}

function hello(res){
    let Body = 'this is hello'
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(Body);
    res.end();

}
exports.start = start;
exports.hello = hello;