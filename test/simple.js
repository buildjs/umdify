var fs = require('fs'),
    path = require('path'),
    umdify = require('..');

fs.createReadStream(path.resolve(__dirname, 'fixtures/simple.js'), { encoding: 'utf8' })
    .pipe(umdify())
    .pipe(process.stdout);