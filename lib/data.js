const faker = require('faker')
const debug = require('debug')
const TYPES = require('./types')

const log = debug('tester')

const generate =  {
  'Undefined': () => undefined,
  'Null': () => null,
  'Boolean': () => faker.random.boolean(),
  'Number': () => faker.random.number(),
  'String': () => faker.random.words(),
  'Function': () => () => true,
  'Object': () => faker.random.objectElement(),
  'Array': () => faker.randon.arrayElement()
}

const DATA = (stackPile, pile = [], index = 0) => {
	log('typeIn stackPile', stackPile)
	const data = generate[stackPile[index]]()
	pile[index] = data

	return index < stackPile.length - 1
		? DATA(stackPile, pile, ++index)
		: pile
}

module.exports = DATA 
