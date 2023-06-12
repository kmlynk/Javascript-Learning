/*
for (let i = 0; i <= 10; i += 2) {
  console.log(i)
}

console.log('***************************')

for (let i = 5; i >= 0; i--) {
  console.log(i)
}

console.log('***************************')

const arr = [1, 2, 3]

for (let i = 0; i < arr.length; i++) {
  arr[i]++
}

console.log(arr)

console.log('***************************')

function addOne(arrToAdd) {
  for (let i = 0; i < arrToAdd.length; i++) {
    arrToAdd[i]++
  }
  return arrToAdd
}

const arr2 = [-2, -1, 0, 99]

console.log(addOne(arr2))
*/

/**
 * Function takes an Array and returns its minimum and maximum values in an Array
 * @param {Array} minMaxArr 
 * @returns Array 
 */

function minMax(minMaxArr) {
  let min = null
  let max = null
  const mmArr = []

  if (minMaxArr[0] != null) {
    min = minMaxArr[0]
    max = minMaxArr[0]
  }

  for (let i = 0; i < minMaxArr.length; i++) {
    if (minMaxArr[i] < min) {
      min = minMaxArr[i]
    }
    else if (minMaxArr[i] > max) {
      max = minMaxArr[i]
    }
  }

  mmArr.push(`min: ${min}`)
  mmArr.push(`max: ${max}`)

  return mmArr
}

const test = [-2, 3, -5, 7, 10]
console.log(minMax(test))

console.log('***************************')

const testNull = []
console.log(minMax(testNull))

console.log('***************************')

const testSame = [3] 
console.log(minMax(testSame))

console.log('######################################')

/**
 * Function takes an Array of words and counts every word
 * At the end of Array it returns all words and counts as an object
 * @param {Array} words 
 * @returns Object countOfWords
 */
function countWords(words) {
  let countOfWords = {

  }

  for (let i = 0; i < words.length; i++) {
    console.log(words[i])
    if (countOfWords.hasOwnProperty(words[i])) {
      countOfWords[words[i]] += 1
    }
    else {
      countOfWords[words[i]] = 1
    }
  }

  return countOfWords
}


console.log(countWords(['apple', 'grape', 'car', 'grape']))