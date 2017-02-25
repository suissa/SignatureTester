module.exports = {
    'c': {
        name: 'Celsius',
        'f': (val) => (val * 1.8 + 32),
        'k': (val) => (val + 273.15)
    },
    'f': {
        name: 'Fahreneit',
        'c': (val) => (val - 32) / 1.8,
        'k': (val) => (val * 1.8) - 459.67
    },
    'K': {
        name: 'Kelvin',
        'c': (val) => (val - 273.15),
        'f': (val) => ((val - 273.15) * 1.8 + 32)
    },
    'cal': {
        name: 'Caloria',
        'J': (val) => (val * 4.184),
    },
    'J': {
        name: 'Joule',
        'cal': (val) => (val / 4.184),
    },
    'torr': {
        name: 'Torr',
        'atm': (val) => (val / 760.0020536691873),
    },
    'atm': {
        name: 'atm',
        'torr': (val) => (val * 760.0020536691873),
        'mmHg': (val) => (val * 760.0020536691873),
        'Pa': (val) => (val * 101325.2738),
    },
    'Pa': {
        name: 'Pascal',
        'atm': (val) => (val / 101325.2738),
    },
    'N': {
        name: 'Newton',
        'kgf': (val) => (val / 9.8),
    },
    'kgf': {
        name: 'Kilograma-força',
        'N': (val) => (val * 9.8),
    },
    'km/h': {
        name: 'Kilômetro por hora',
        'm/min': (val) => (val / (60 / 1000)).toFixed(2),
        'm/s': (val) => (val / (3600 / 1000)).toFixed(2),
        'cm/min': (val) => (val / (60 / 100000)).toFixed(2),
        'cm/s': (val) => (val / (3600 / 100000)).toFixed(2),
    },
    'kg/m3': {
        name: 'Kilograma por metro cúbico',
        'g/l': (val) => (val * 1),
        'g/m3': (val) => (val * 1000),
        'g/ml': (val) => (val * 0.001),
    },
    'm3/s': {
        name: 'Metro cúbico por segundo',
        'l/h': (val) => (val * 3600000),
        'l/min': (val) => (val * 60000),
        'l/s': (val) => (val * 1000),
    },
    'L': {
        name: 'Litro',
        'mL': (val) => (val * 1000),
    },
    'mL': {
        name: 'Mililitro',
        'L': (val) => (val / 1000),
    },
    'kg': {
    name: 'Quilograma',
    'g': (val) => (val  * 1000),
    },
    'g': {
    name: 'Grama',
    'kg': (val) => (val  / 1000),
    },
    's': {
    name: 'Segundo',
    'min': (val) => (val  * 1 / 60),
    },
    'min': {
    name: 'Minutos',
    's': (val) => (val  * 60),
    },
    'h': {
    name: 'Hora',
    'min': (val) => (val  * 60),
  },
}