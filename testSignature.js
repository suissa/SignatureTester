const TYPES = require('./types')

const signature = (anotattion) => anotattion.split(' -> ')

const check = (test, type) => test(type)

const checkType = (TYPES, typeIn) => (type, i) => check(TYPES[typeIn], type)

const checkThis = (data, TYPES, typeIn) => data.map(checkType(TYPES, typeIn))

const checkSignature = ( anotattion = [], data = [], fn ) => {
  const [ typeIn, typeOut ] = signature( anotattion )
  const computed = fn( ...data )
  const _in = checkThis( data, TYPES, typeIn )
  const _out = checkThis( [computed], TYPES, typeOut )

  return { _in, _out }
}

module.exports = checkSignature