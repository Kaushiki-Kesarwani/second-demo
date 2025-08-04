const student = {
  name: 'palak',
  cgpa: 9,
  age: 18,
  is_pass: true,
}

for (let key in student) {
  console.log('key = ', key ," ,  value = ",student[key]);
}
