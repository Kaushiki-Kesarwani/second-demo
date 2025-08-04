// console.log("one");
// console.log("two");
// console.log("three");
//     setTimeout( ()=>{
//         console.log("palak");
//     } ,5000 );
//     console.log("four");
//     console.log("five");
//     console.log("six");

// const get=(data,getnext)=>{
//     return new Promise((resolve,reject)=>{
// setTimeout(()=>{
   // console.log("Data", data);
    //resolve("Success");
//     reject("error");
//     if(getnext){
//         getnext();
//     }
// },3000);
// });
// }

// console.log("getting data 1.....")
// get(1,()=>{
//     console.log("getting data 2.....")
//     get(2,()=>{
//         console.log("getting data 3.....")
//         get(3 ,()=>{
//             console.log("getting data 4.....")
//             get(4,()=>{
//                 console.log("getting data 5.....")
//                 get(5)
//             });
//         })
//     })
// });

// const async_func1=()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{console.log("I am promise one")
//             resolve("success");
//         },3000);
    
//       })
// }

// const async_func2=()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{console.log("I am promise two")
//             resolve("success");
//         },3000);
    
//       })
// }

// console.log("fetching data 1....");
// let promise=async_func1();
// promise.then((res)=>{
//     console.log("fetching data 2....");
// let promise2=async_func2();
// promise2.then((res)=>{
//     console.log(res);
// });
// });

async function hello(){
    console.log("Hello world");
}

const API=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("fetcing API...");
            resolve(200);
        },3000);
    })
}
    async function fetch(){
        await API();
        await API();
    }

fetch();

