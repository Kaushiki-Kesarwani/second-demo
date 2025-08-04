//Qs. For a given array of numbers, print the square of each value using the forEach loop.

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let square = (nums) => {
  let s = nums * nums
  console.log(`Square = ${s}`)
}
num.forEach(square)
