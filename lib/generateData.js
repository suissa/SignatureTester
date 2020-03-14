const faker = require('faker')
const debug = require('debug')
const TYPES = require('./types')

const log = debug('tester')

const generate =  {
  'undefined': () => undefined,
  'null': () => null,
  'boolean': () => faker.random.boolean(),
  'number': () => faker.random.number(),
  'string': () => faker.random.words(),
  'function': () => () => true,
  'object': () => faker.random.objectElement(),
  'array': () => faker.randon.arrayElement()
}

const DATA = (stackPile, pile = [], index = 0) => {
	log('typeIn stackPile', stackPile)
	const data = generate[typeof stackPile[index]]()
	pile[index] = data

	return index < stackPile.length - 1
		? DATA(stackPile, pile, ++index)
		: pile
}

module.exports = DATA 
