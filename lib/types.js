module.exports = {
  'undefined': ( val ) => typeof val === 'undefined',
  'null': ( val ) => typeof val === 'object',
  'boolean': ( val ) => typeof val === 'boolean',
  'number': ( val ) => typeof val === 'number',
  'string': ( val ) => typeof val === 'string',
  'symbol': ( val ) => typeof val === 'symbol',
  'function': ( val ) => typeof val === 'function',
  'object': ( val ) => typeof val === 'object',
  'array': ( val ) => Array.isArray(val),
  '*': ( val ) => typeof val === 'undefined' ||
                  typeof val === 'object' ||
                  typeof val === 'boolean' ||
                  typeof val === 'number' ||
                  typeof val === 'string' ||
                  typeof val === 'function'
}
