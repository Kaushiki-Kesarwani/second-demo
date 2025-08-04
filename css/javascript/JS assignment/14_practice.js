//Qs. We are given array of marks of students. Filter out marks of students that scored 90+.

marks=[95,78,85,91,90,92];
let newval=marks.filter((mark)=>{
    return mark>90 ;  
})
console.log(newval);