const myServer = require('./Myserver');
const myRouter = require('./myRouter');

myServer.start(myRouter.route);