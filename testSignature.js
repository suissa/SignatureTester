const TYPES = {
  'Undefined': ( val ) => typeof val == 'undefined',
  'Null': ( val ) => typeof val == 'object',
  'Boolean': ( val ) => typeof val == 'boolean',
  'Number': ( val ) => typeof val == 'number',
  'String': ( val ) => typeof val == 'string',
  '*': ( val ) => typeof val == 'undefined' ||
                  typeof val == 'object' ||
                  typeof val == 'boolean' ||
                  typeof val == 'number' ||
                  typeof val == 'string'
}
// String -> [in, out]
const signature = (anotattion) => anotattion.split(' -> ')

// [Signature] -> [Data]
const check = (test, type) => test(type)

const checkType = (TYPES, typeIn) => (type, i) => check(TYPES[typeIn], type)

const checkIn = (data, TYPES, typeIn) => data.map(checkType(TYPES, typeIn))

const checkOut = (data, TYPES, typeOut) => data.map(checkType(TYPES, typeOut))

// Int, Str : [6, 'Lukas']
const checkSignature = (anotattion = [], data = [], fn) => {
  const [typeIn, typeOut] = signature(anotattion)
  // console.log('data', data)
  // console.log('fn', fn)
  const computation = fn(...data)
  const resultIn = checkIn(data, TYPES, typeIn)
  const resultOut = checkOut([computation], TYPES, typeOut)
  // console.log('resultIn', resultIn)
  // console.log('resultOut', resultOut)
  return {resultIn, resultOut}
}

// const isPar = (num) => !(num%2)

// let t = checkSignature('Number -> Boolean', [6], isPar)
// let u = checkSignature('Number -> Boolean', [[7]], isPar)
// let i = checkSignature('Number -> Boolean', ['String bugada'], isPar)
// let o = checkSignature('Number -> Boolean', [{}], isPar)

// console.log('teste', t, u, i, o)

module.exports = checkSignature