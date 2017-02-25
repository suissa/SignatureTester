const expect = require(`chai`).expect
const fs = require('fs')

const option = process.argv.length > 3 
                ? process.argv[process.argv.length - 1]
                : `spec.`

const runMuthafuckingTests = (MODULE) => {
  console.log('MODULE', MODULE)
  const testUnity = (toTest) => 
      MODULE.Tests.reduce( (value, test) => { 
        console.log('\n\nMODULE.value', MODULE.value)
        console.log('value', value)
        console.log('test', test)
      // it(`${toTest} ${value.toTest}`, () => 
          // test( value.result, value.toTest )
      // )
        return value
      }, { result: MODULE.getResult(toTest), toTest: MODULE.value[toTest] })
    

  describe( MODULE.titleTest, () => Object.keys( MODULE.value )
                                          .map( testUnity ) )
}

fs.readdirSync(__dirname)
    .filter( (file) => (file.startsWith(option) ) ? file  : false )
    .map( file => require('./'+file) )
    .map(runMuthafuckingTests)