module.exports =  { 
  'N': {
    name: 'Newton',
    'kgf': (val) => (val  * 0.10204081632),
  },
  'kgf': {
    name: 'Kilograma-força',
    'N': (val) => (val  * 9.8),
  }
}
