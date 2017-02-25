module.exports =  { 
  'L': {
    name: 'Litro',
    'mL': (val) => (val  * 1000),
  },
  'mL': {
    name: 'Mililitro',
    'L': (val) => (val  / 1000),
  }
}
