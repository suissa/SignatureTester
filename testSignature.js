const TYPES = require('./types')

const signature = (anotattion) => anotattion.split(' -> ')

const check = (test, type) => test(type)

const checkType = (TYPES, typeIn) => (type, i) => check(TYPES[typeIn], type)

const checkThis = (data, TYPES, typeIn) => 
  ( typeIn === 'Array' ) 
    ? [checkType(TYPES, typeIn)(data)]
    : data.map(checkType(TYPES, typeIn))

const checkSignature = ( anotattion = [], data = [], fn ) => {
  
  const [ typeIn, typeOut ] = signature( anotattion )

  const computed = ( typeIn === 'Array' )
                      ? fn( data )
                      : fn( ...data )

  const _in = checkThis( data, TYPES, typeIn )
  const _out = checkThis( [computed], TYPES, typeOut )
  
  return { _in, _out }
}

module.exports = checkSignature