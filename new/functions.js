// // Function Declaration
// function square(num){
//     return num*num;
// }

// console.log(square(2))


// // Function expression
// const multiply = function(a, b){
//     return a * b;
// }
// console.log(multiply(5, 10));


// // What are the first class functions
// function displaySquare(fn){
//     console.log(fn(5))
// }

// // console.log(displaySquare(square))


// // IIFE Function
// (function(a, b){
//     console.log("res " + a/b)
// })(20, 10)



// //IIFE - Output based Question
// (function(x){
//     return (function (y){
//         console.log(x)
//     })(10)
// })(20)

// // Ouput
// // 20


// // Output Based Questions
// for(let i = 0; i < 5; i++){
//     setTimeout(function(){
//         console.log(i)
//     }, i * 1000)
// }


// console.log(foo4())

// let foo = () => {
//     console.log("arrow function")
// }

// let foo1 = function(){
//     console.log("arrow function")
// }

// var foo2 = () => {
//     console.log("arrow function")
// }

// var foo3 = function(){
//     console.log("arrow function")
// }


// function foo4(){
//     console.log("function foo4")
// }







// var x = 21;


// var fun = function(){
//     console.log(x)
//     var x = 20
// }

// fun()



// function square(num){
//     console.log(num*num)
// }

// square(5)







// ======================== SPREAD VE REST OPERATOR ====================
let arr = [10, 20, 30]

let arr2 = [...arr, 40, 50]
console.log(arr2)



function foo(a, b, ...rest){
    console.log(a, b, rest)
}

foo(10, 20, 30, 40, 50)












// =========================== this keyword behaviour (in normal as well as arrow function) =====================
// let user ={
//     name : "Utkarsh Singh Chouhan",

//     foo1 : () => {
//         console.log(`Hi my name is ${this.name}`)
//     },

//     foo2(){
//         console.log(`Hi my name is ${this.name}`)
//     }
// }

// user.foo1();
// user.foo2();