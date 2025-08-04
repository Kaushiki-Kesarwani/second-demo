/*Create a game where you start with any random game number. Ask the user to keep
guessing the game number until the user enters correct value.
*/
let correctnum = 56
let num = prompt('Enter the number guessed by the user: ')

while (num != correctnum) {
   num = prompt(
    'you have entered wrong number! Please guess the correct number : ',
  )
}
console.log('Congratulations! You have guessed the correct number')
