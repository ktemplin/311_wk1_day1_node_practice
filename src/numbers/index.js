const isEven = (num) => {
  // write code for numbers.isEven
  return num % 2 == 0
}

const sum = (arr) => {
  // write code for numbers.sum
  sumNum = arr.reduce((a, b) => a + b, 0)
  return sumNum
}

const comboSum = (arr, sum) => {
  // write code for numbers.comboSum
  // sumOfNums = arr.reduce((a, b) => a+b)
  let combinationFound = false

  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        // console.log("Combination found:", arr[i], "+", arr[j], "=", sum);
        combinationFound = true;
        break;
      }
    }
    if (combinationFound) {
      return true
      break;
    }
  }
  if (!combinationFound) {
    return false
    // console.log("No combination found.");
  }
}


module.exports = {
  isEven,
  sum,
  comboSum
}