const test = require('./testSignature')

const { fn, signature } = require('./actions/fromArraytoObject')
// const { fn, signature } = require('./actions/toString')
// console.log('fn', fn)
// console.log('signature', signature)
console.log('test', test(signature, [4, 5], fn))