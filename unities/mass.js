module.exports =  { 
  'kg': {
    name: 'Quilograma',
    'g': (val) => (val  * 1000),
  },
  'g': {
    name: 'Grama',
    'kg': (val) => (val  / 1000),
  }
}
