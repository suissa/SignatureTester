const testThis = ( email ) => typeof email == 'number'
const expect = require(`chai`).expect


const value = ['jean@gmail.com', 2]

const titleTest = `Email valido:`
const testNull = ( result ) =>  expect( result ).not.to.be.null
const testType = ( result ) =>  {
  expect( result ).not.to.be.NaN
  expect( result ).not.to.be.null
}
const testValue = ( result, correctValue ) =>  expect( result ).to.be.string
const getResult = ( toTest, val ) => testThis(toTest)

const Tests = [ testType, testValue ]

module.exports = {
  titleTest,
  value,
  getResult,
  Tests
}