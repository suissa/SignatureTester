const { init, head, last, tail } = require('lodash/fp')
const debug = require('debug')
const TYPES = require('./types')
const DATA = require('./data')

const log = debug('tester')

const signature = (anotattion) => anotattion.split(' -> ')

const check = (test, val) => {
    log(test)
    return test(val)
}

const checkType = (TYPES, data) => (typeOut, index = 0, result = []) => {
	const typeChecker = check(TYPES[typeof data], data)
	result[index] = typeChecker

	return (index < typeOut.length - 1)
		? checkType(TYPES, typeOut)(data, ++index, result)
		: result
}

const checkSignature = (annotation = [], fn) => {
	const signaturePile = signature(annotation)

	const typeIn = init(signaturePile)
	const typeOut = [last(signaturePile)]

	const data = DATA(typeIn)

    log('typeOut', typeOut)
	log('typeIn generated data', data)

	const computed = (typeIn === 'Array')
		? fn(data)
		: fn(...data)

	const _in = typeIn 
    const _out = checkType(TYPES, computed)(typeOut)
  
	return { _in, _out }
}

module.exports = checkSignature
