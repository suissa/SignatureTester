const testThis = require('../converter')
const expect = require(`chai`).expect
const category = __filename.split('spec.')[1].split('.')[0]
const unities = require(`./../unities/${category}`)
const Unity = { 
  base: 'g',
   to: 'kg'
 }
const value = {
  '-5': -0.005,
  '0': 0,
  '1': 0.001,
  '5': 0.005,
  '7': 0.007,
}
const titleTest = `Massa ${Unity.base} deve ser convertida para ${Unity.to}:`
const testNull = ( result ) =>  expect( result ).not.to.be.null
const testType = ( result ) =>  {
  expect( result ).not.to.be.NaN
  expect( result ).not.to.be.null
}
const testValue = ( result, correctValue ) =>  expect( result ).to.equal(correctValue)
const getResult = ( toTest ) => testThis(unities, toTest, `${Unity.base}`, `${Unity.to}`)

const Tests = [ testType, testValue ]

module.exports = {
  titleTest,
  value,
  unities,
  getResult,
  Unity,
  Tests
}