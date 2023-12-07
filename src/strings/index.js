const split = (str, delim) => {
  // write code for strings.split
  let banana = str.split(delim)
  return banana
}

const pairs = (str) => {
  // write code for strings.pairs
  let paired = str.match(/.{1,2}/g ?? [])
  return paired
}

const reverse = (str) => {
  // write code for strings.reverse
  let backSplit = str.split("")
  let holdThis = backSplit.reverse()
  let sdrawkcab = holdThis.join("")
  return sdrawkcab
}

module.exports = {
  split,
  pairs,
  reverse
}