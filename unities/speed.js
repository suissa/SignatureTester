const DECIMALS = 2

const s = 1
const min = 60
const h = 60

module.exports =  {
  'km/h': {
    name: 'Kilômetros por hora',
    'm/min': (val) => (val / (min/1000) ).toFixed(DECIMALS),
    'm/s': (val) => (val  / (min * h/1000)).toFixed(DECIMALS),
    'cm/min': (val) => (val  / (min/100000) ).toFixed(DECIMALS),
    'cm/s': (val) => (val  / (min * h/100000) ).toFixed(DECIMALS),
  },
}
