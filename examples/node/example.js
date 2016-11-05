require('lodash');
var nmTransalate = require('./nmTransalate.js');
var out = function() {
    process.stdout.write('This is the result for numtoword(1) === ' + nmTransalate.numtoword(1));
};
out();