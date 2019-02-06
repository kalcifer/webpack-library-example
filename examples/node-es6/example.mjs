// until es6 modules are supported, run this file with "node --experimental-modules"

import webpackNumbers from './webpack-numbers.js'

console.log()
console.log('Testing es6-style invocation:')
console.log('This is the result for numtoword(1) === ' + webpackNumbers.numtoword(1))
console.log()