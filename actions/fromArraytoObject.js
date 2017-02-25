const toObject = ( acc, cur, i ) => 
  Object.assign({}, acc, {[i]: cur})

const fn = ( arr ) => arr.reduce ? arr.reduce( toObject, {} ) : arr
const signature = `Array -> Object`

module.exports = { fn, signature }