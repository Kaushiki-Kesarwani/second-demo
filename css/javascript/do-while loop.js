do {
  let user = prompt('Enter a number greater than hundred:')
  user=Number(user);
} while (user <= 100 && user !== 0 && !isNaN(user))

console.log('You have Entered a number greater than 100')
