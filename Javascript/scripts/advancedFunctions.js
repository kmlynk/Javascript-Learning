/*
const function1 = function() {
  console.log('Hello')
}
// But hoisting doesn't work this way

console.log(function1)

console.log('**************************')

function1()

console.log('**************************')

// Function saved inside of an object
const object1 = {
  num: 2,
  fun: function() {
    console.log('Hello')
  }
}

object1.fun()

console.log('**************************')

// Passing a function into an another function
function run(param) {
  param()
}
run(function() {
  console.log('Hello 4')
})
*/

/*
// Wait for n milliseconds - 1000ms = 1s
setTimeout(function() {
  console.log('Timeout')
}, 2000)

// Run function every n milliseconds
setInterval(function() {
  console.log('Interval')
}, 3000)
*/

[
  'Make Dinner',
  'Wash Dishes',
  'Watch Youtube'
].forEach(function(value, index) {
  console.log(value, index)
})