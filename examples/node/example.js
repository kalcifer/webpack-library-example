require('lodash');
var webpackNumbers = require('./webpack-numbers.js');
var out = function() {
    process.stdout.write('This is the result for numtoword(1) === ' + webpackNumbers.createTranslator().numtoword(1));
};
out();