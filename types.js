module.exports = {
  'Undefined': ( val ) => typeof val === 'undefined',
  'Null': ( val ) => typeof val === 'object',
  'Boolean': ( val ) => typeof val === 'boolean',
  'Number': ( val ) => typeof val === 'number',
  'String': ( val ) => typeof val === 'string',
  'Symbol': ( val ) => typeof val === 'symbol',
  'Function': ( val ) => typeof val === 'function',
  'Array': ( val ) => val instanceof Array,
  '*': ( val ) => typeof val === 'undefined' ||
                  typeof val === 'object' ||
                  typeof val === 'boolean' ||
                  typeof val === 'number' ||
                  typeof val === 'string' ||
                  typeof val === 'function'
}