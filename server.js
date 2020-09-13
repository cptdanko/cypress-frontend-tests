    var connect = require('connect');
    var serveStatic = require('serve-static');
    /* __dirname same as path.dirname() */
    connect()
        .use(serveStatic(__dirname))
        .listen(8080, () => console.log(`server running on 8080`));
