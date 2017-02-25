module.exports = {
  'Undefined': ( val ) => typeof val == 'undefined',
  'Null': ( val ) => typeof val == 'object',
  'Boolean': ( val ) => typeof val == 'boolean',
  'Number': ( val ) => typeof val == 'number',
  'String': ( val ) => typeof val == 'string',
  '*': ( val ) => typeof val == 'undefined' ||
                  typeof val == 'object' ||
                  typeof val == 'boolean' ||
                  typeof val == 'number' ||
                  typeof val == 'string'
}