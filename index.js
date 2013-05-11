var esprima = require('esprima'),
    findme = require('findme'),
    through = require('through');

module.exports = function() {
    return through(
        function write(data) {
            console.log(data);
        },

        function end() {
        }
    );
};