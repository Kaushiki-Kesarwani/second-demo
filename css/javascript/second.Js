let a = 6
let b = 3
//Arithmatic operator
let sum = a + b
console.log('a =', a, '& b =', b)
console.log('a + b =', sum)
console.log('a * b =', a * b)
console.log('a - b =', a - b)
console.log('a / b =', a / b)
console.log('a % b =', a % b)
console.log('a ** b =', a ** b) //6^3=216
a++
console.log('a++ =', a)
++a
console.log('++a =', a)
b--
console.log('b-- =', b)
--b
console.log('--b =', b)
//Assignment operator
a = 5
console.log('a += 1 =', (a = a + 1)) //a=5+1
console.log('a *= 1 =', (a = a * 1)) //a=6*1
console.log('a -= 1 =', (a = a - 1)) //a=6-1
console.log('a /= 1 =', (a = a / 1)) //a=5/1
console.log('a %= 1 =', (a = a % 1)) //a=5%1
a = 2
console.log('a **= 1 =', (a = a ** 2)) //a=5**2

//Comparison operator
a = 3
b = 3
console.log('3 == 3', a == b)
console.log('3 != 3', a != b)
console.log('3 === 3', a === b)
console.log('3 !== 3', a !== b)

a = 10
b = 12
console.log('b > a', b > a)
console.log('a < b', a < b)
console.log('b <= a', b <= a)
console.log('a <= b', a <= b)

//logical operators
console.log(a <= b && b >= a) //True
console.log(a <= b || b <= a) //true bcz at least one of this is true 
console.log(!(b <= a) )//false