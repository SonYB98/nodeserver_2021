function route(pathname, handle, res) {
    console.log('Routing request fot ' + pathname);

    if(typeof handle[pathname] === 'function'){
        handle[pathname](res);
    }
    else {
        console.log('404 Not Found ');
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write(sBody);
        res.end();
    }
}

exports.route = route;