module.exports =  { 
  's': {
    name: 'Segundo',
    'min': (val) => (val  * 1 / 60),
  },
  'min': {
    name: 'Minutos',
    's': (val) => (val  * 60),
    'h': (val) => (val  * 1 / 60),
  },
    'h': {
    name: 'Hora',
    'min': (val) => (val  * 60),
  }
}
