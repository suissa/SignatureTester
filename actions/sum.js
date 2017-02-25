const sum = ( acc, cur ) => acc + cur

const fn = ( arr ) => arr.reduce( sum )
const signature = `Array -> Number`

module.exports = { fn, signature }