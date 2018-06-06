const _ = require('lodash');
const gg = require('./another.js');

console.log(_.get({foo: {bar: 123}}, 'foo.bar'), gg);
