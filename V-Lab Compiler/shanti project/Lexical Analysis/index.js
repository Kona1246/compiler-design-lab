let fs = require('fs');
let packageDirectory = __dirname + '/package/';

eval(fs.readFileSync(packageDirectory + 'c-lexer.min.js', 'utf8').toString());
let cLexer = lexer;

module.exports = {
    cLexer: cLexer,
};