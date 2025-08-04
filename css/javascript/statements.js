//Conditional statements
//color modes
let mode
let color

mode = 'dark'

if (mode === 'dark') {
  color = 'black'
} else {
  color = 'white'
}

console.log(color)

//odd,even

let even, odd, num
num = 15

if (num % 2 === 0) {
  console.log(num, 'is even')
} else {
  console.log(num, 'is odd')
}

//Different color modes

let modes = 'brown'
let colors

if (modes === 'dark') {
  colors = 'Black'
} else if (modes === 'brown') {
  colors = 'Brown'
} else if (modes === 'blue') {
  colors = 'Blue'
} else {
  colors = 'white'
}

console.log(colors)

//ternary operator

let age = 21

let result = age >= 18 ? 'adult' : 'not adult'
console.log(result)
