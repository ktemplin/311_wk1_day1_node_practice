const isEven = (num) => {
  // write code for numbers.isEven
  return num % 2 == 0
}

const sum = (arr) => {
  // write code for numbers.sum
  sumNum = arr.reduce((a, b) => a+b, 0)
  return sumNum
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  sumOfNums = arr.reduce((a, b) => a+b)
  

}

module.exports = {
  isEven,
  sum,
  comboSum
}