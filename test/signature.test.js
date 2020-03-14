const sinon = require('sinon')
const chai = require('chai')
const { expect } = require('chai')
const tester = require('../lib/index.js')
const checkSignature = require('../lib/testSignature.js')

describe('Signatures', () => {
	it('should test the signature', (done) => {
		const annotation = 'String -> String -> String'
		const fn = (str1, str2) => `${str1}.${str2}`

		const result = checkSignature(annotation, fn)

		expect(result._in).to.be.an('array')
		expect(result._in).to.have.length(2)

		expect(result._out).to.be.a('array')
		expect(result._out).to.have.length(1)
		done()
	})
})

describe.skip('Should parse the signature annotation', () => {
	it('should parse the annotation to types', (done) => {
		const file = fs.readFileSync(`${process.cwd()}/test/__mocks__/description.js`)

		const result = tester(file)

		expect(result).to.be.an('array')
		done()
	})


	it('should parse every annotation to types')
})
