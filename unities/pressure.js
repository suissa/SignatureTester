module.exports =  { 
  'torr': {
    name: 'Torr',
    'atm': (val) => (val  * 0.001315785918),
  },
  'atm': {
    name: 'ATM',
    'torr': (val) => (val  * 760),
  }
}
