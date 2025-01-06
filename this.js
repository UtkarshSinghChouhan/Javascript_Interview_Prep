// const obj  = {
//     x : 10, 
//     y : 20,

//     nested : {
//         z : 30,
//         y : 22,


//         displayInner : function(){
//             console.log(`value of x ${this.x} and y is ${this.y}`)
//         }
//     },

//     displayOuter : function(){
//         console.log(`value of x ${this.x} and y is ${this.y}`)
//     }
// }


// obj.nested.displayInner()
// obj.displayOuter()



// ======================= this keyword in Javascript (IMPLICIT BINDING) ===========================

// var calc = {
//     total : 0,

//     add : (incre) => {
//         this.total += incre;
//         return this;
//     }
// }

// const result = calc.add(10);

// console.log(result)








// ======================= This in GLOBAL CONTEXT ==================

// console.log(this)


// ======================= This in function CONTEXT ==================

// this.a = 5;

// function get(){
    
//     let a = 10
//     console.log(this.a)         //5
// }

// get()


// ========================= this keyword inside an Object =====================

// var age = 30


// let user = {
//     name : "Utkarsh",
//     age : 23,

//     getName : function(){
//         console.log(this.name)      // Utkarsh
//     },

//     getAge : () => {
//         console.log(this.age)       // 30
//     }
// }

// user.getName()
// user.getAge()



// // Example 2

// var age2 = 55

// let user2 = {
//     name : "Mayank",
//     age : 50,

//     getName : function(){
//         console.log(this.name)      // Mayank
//     },

//     getAge : function(){
//         const fun = () => console.log(this.age)     //50
//         fun()
               
//     }
// }

// user2.getName()
// user2.getAge()


// ========================= this keyword inside an Class =====================

// class user {
//     constructor(n){
//         this.name = n
//     }

//     getName(){
//         console.log(this.name)          // reference to waht is defined inside the CONSTRUCTOR
//     }
// }


// const u = new user("Utkarsh")
// u.getName()



// =========================== OUTPUT QUESTION - 01 =========================
// const user = {
//     name : "Utkarsh",
    
    
//     getName(){
//         const name = "Singh"
//         return this.name
//     }
// }

// console.log(user.getName())

// =========================== OUTPUT QUESTION - 02 =========================

// function makeUser(){
//     return{
//         name : "Utkarsh",
//         ref : this      //points the Window Object
//     }
// }

// let user = makeUser();      // we are calling it inside the window object 

// console.log(user.ref.name) // undefined





// =========================== OUTPUT QUESTION - 03 =========================


// THE VLAUE OF CALLBACK DEPENDS ON THE CONTEXT IN WHICH IT IS CALLED

// var name = "Mayank"


// const user = {
//     name : "Utkarsh",
    
//     logMsg : function(){
//         console.log(this.name)
//     }
// }


// setTimeout(user.logMsg, 1000)        //Mayank
// setTimeout(() => {user.logMsg()}, 1000)      //Utkarsh
// setTimeout(function(){user.logMsg()}, 1000)     //Utkarsh



// =========================== OUTPUT QUESTION - 04 =========================


// const user = {
//     name : "Utkarsh",
//     greet(){
//         return `Hello ${this.name}`     //Utkarsh
//     },

//     farewell : () => {
//         return `Goodbye, ${this.name}`      //undefined
//     }
// }

// console.log(user.greet())
// console.log(user.farewell())


// =========================== OUTPUT QUESTION - 05 =========================

// var len = 4;

// function callback(){
//     console.log(this.len)
// }

// const object = {
//     len : 5,
//     method(fn){
//         fn()
//     }
// }
// object.method(callback) //4



// ================= CREATE AN CALCULATOR ===============

// const calculator = {
//     read(){
//         this.a = prompt("a = ", 0)
//         this.b = prompt("b = ", 0)
//     },

//     sum(){
//         // return this.a + this.b         //1020  string concatenation
//         return parseInt(this.a) + parseInt(this.b)  
//     },

//     multiply(){
//         return this.a * this.b
//     }
// }

// calculator.read();
// console.log(calculator.sum())       //1020
// console.log(calculator.multiply())   //200   type coersion



// ================== Implement calc() ====================

// const calc = {

//     total : 0,

//     add(a){
//         this.total += a;
//         return this;
//     },

    
//     multiply(a){
//         this.total *= a;
//         return this;
//     },

//     substract(a){
//         this.total -= a;
//         return this;
//     },

// }

// const result = calc.add(10).multiply(5).substract(30).add(10);

// console.log(result.total)


