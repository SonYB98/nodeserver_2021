function route(pathname, handle, res) {
    console.log('Routing request fot ' + pathname);

    if(typeof handle[pathname] === 'function'){
        handle[pathname](res);
    }
    else {
        console.log('No Handler for ' + pathname);
        let Body = '404 not found';
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write(Body);
        res.end();
    }
}

exports.route = route;