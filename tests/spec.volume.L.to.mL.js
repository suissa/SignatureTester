const expect = require(`chai`).expect
const category = __filename.split('spec.')[1].split('.')[0]
const unities = require(`./../unities/${category}`)
const Unity = {
  base: 'L',
  to: 'mL'
}
const value = {
  '-100': -100000,
  '0': 0,
  '7': 7000,
  '11': 11000,
  '15': 15000,
}

const converter = (val, base, to) => Number(unities[base][to](val))
const testType = (result) =>  expect(result).not.to.be.NaN
const testValue = (result, correctValue) =>  expect(result).to.equal(correctValue)
const getResult = (toTest) => converter(toTest, `${Unity.base}`, `${Unity.to}`)
const titleTest = `Medida ${Unity.base} deve ser convertida para ${Unity.to}:`

const Tests = [ testType, testValue ]

module.exports = {
  titleTest,
  value,
  unities,
  getResult,
  Unity,
  Tests
}