//  primitive data type  //

// 7 type : String,Number,Boolean,Null ,Undefined ,Symbol ,BIgInt


const score=100;
const totalscore =110.3;

const isLOggedin=false
const outsideTemp= null
 let emailId;

 const id =Symbol("123")
  const anotherid =Symbol("123")
  console.log(id=== anotherid);
  const bigNumber=12343432434252n
  



//Reference type (non premitive type)
//Array ,Objects,Functions//

// const Fruits=["apple","mango","orange"]

// let obj={
//     name:"Refat",
//     age:25,
// }

// const myFunction=function(){
//     console.log("Hello worlde");
    
// }

// console.log(typeof bigNumber);
// console.log(typeof score);

// console.log(typeof Function);
// console.log(typeof Fruits);

// stack(primitive),heap (Non-Primitive)

let mychannelname ="refat120"
let anothername=mychannelname
 anothername= "refat 12000"
console.log(anothername);
console.log(mychannelname);


let userOne={
    email:"user@gmail.com",
    pass:"1234"
}
let userTwo=userOne
userTwo.email="user2@gmail.com"
console.log(userOne);
console.log(userTwo);

