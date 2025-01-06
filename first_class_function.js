// ========================== FIRST CLASS CITIZEN ============================

// function square(x){
//     return x * x;
// }
    

// function displaySquare(fn){
//     console.log("Square is " + fn(5));
// }

// displaySquare(square)


        
// ==========================var and let and closures ============================

// for(var i = 0; i < 5; i++){
    
//     setTimeout(() => {
        
//         console.log(i)
        
//     }, i *1000)

// }
// for(let i = 0; i < 5; i++){
    
//     setTimeout(() => {
        
//         console.log(i)
        
//     }, i *1000)
    
// }


// ========================== Hoisting ============================

// var x = 20;

// function func(){
//     console.log(x);
//     var x = 30
// }

// func()


// ========================== rest and spread operator - 1============================
// function multiply (...nums){   //Rest Operator
//     console.log(nums[0] * nums[1])
// }


// var arr =[10, 6]
// multiply(...arr)    //Spread Operator


// ==========================  rest and spread operator - 2============================

// const func = (a, x, y, ...nums) => {
//     console.log(x, y)
// }


// var arr = [1, 2, 3, 4, 5]

// func(...arr)



// ==========================  Arrow Function and Normal Function ============================

// Behaviour with "this" keyword

// let user = {
//     username : "Utkarsh",

//     fun1 : () => {
//         console.log("user name is ", this.username)     //referes to global scope
//     },
    
//     fun2 : function(){
//         console.log("user name is ", this.username)     //referes to block scope
        
//     }
// }


// user.fun1();
// user.fun2();


// ===================================== CLOSURES =================================

// var x;
// function fun () {
    
//     var x = "utkarsh";

//     function fun1(){
//         var x = "singh";
//         return () => console.log(x)
        
//     }

//     fun1()();
// }

// fun()

// ======================== CLOSURE SCOPE CHANING ==========================

// var a = "utkarsh";

// function fun(b){

//     return function (c){

//         return function(d){

//             return function(e){

//                 return a + b + c + d + e;
//             }
//         }
//     }

// }

// console.log( fun("singh")("chouhan")("Frontend")("Engineer") )








// example - 01 ===================



// let count = 0;

// (function printCnt(){

//     if(count == 0){

//         let count = -1;      //shadowing
        
//         console.log("inside", count);


//     }

//     console.log("outside", count)

// })()





// example - 02 ===================

// var count = 0;

// (function printCnt(){
    
//     if(count == 0){
        
//         var count = -1;    
        
//         console.log("inside", count);

        
//     }
    
//     console.log("outside", count)

// })()


//========================================== Question - Write a function that would allow you to do this

// var addSix = createBase(6);

// addSix(10);      //16
// addSix(20);      //26


// ================answer==============


// function createBase(a){
    
//     return  (b) => {
//         console.log(a + b)
//     }
    
// }


// var addSix = createBase(6);

// addSix(10);
// addSix(20);




//========================================== Question - Use Closue Concept to optimize the time of the following code

// function find(index){
//     let arr = [];
//     for(let i = 0; i < 1000000; i++){
//         arr[i] = i * i;
//     }

//     console.log(arr[index])
// }


// console.time("6")
// find(6)
// console.timeEnd("6")


// console.time("12")
// find(12)
// console.timeEnd("12")


// ======================Optimized Code=====================
// console.log("===========================================")


// function find(){


//     let arr = [];
//     for(let i = 0; i < 1000000; i++){
//         arr[i] = i * i;
//     }

//     return function(index){
//         console.log(arr[index])
//     }
// }


// const closure = find();

// console.time("6")
// closure(6)
// console.timeEnd("6")


// console.time("12")
// closure(12)
// console.timeEnd("12")



// ==========================   BLOCK SCOPE AND SETTIMEOUT WITH CLOSURE ==============================
// Qestion 4 : Block scope and setTimeout()

// function a1(){

//     for(var i = 0; i < 3; i++){


//         setTimeout(() => {
            
//             console.log(i)

//         }, i * 1000)       

//     }

// }

// a1()



// =========Resolved using closure wiht var || can also be resolved using let ====================
// function a(){

//     for(var i = 0; i < 3; i++){

//         function inner (i){

//             setTimeout(() => {
                
//                 console.log(i)
    
//             }, i * 1000)

//         }

//         inner(i)

//     }

// }

// a()


// ============== How would you use a closure to create a private counter


// function counter(){

//     var cnt = 0

//     function add(inc){

//         cnt += inc;
//     }

//     function retrieve(dec){

//         return "counter = " + cnt;
//     }

//     return{
//         add, 
//         retrieve
//     }


// }

// const res = counter();

// console.log(res.retrieve())
// res.add(5)
// console.log(res.retrieve())


// ===================== Module Pattern ===============


// var Module = (function(){

//     function privateMethod(){
//         console.log("inside private method")
//     }

//     return {
//         publicMethod : function(){
//             privateMethod()
//         }
//     }


// })()


// Module.publicMethod()

// ================== "Once Called" =>   Make the follwing function run only once =======================

// let view ;

// function func(){
//     view = "utkarsh"
//     console.log("view => ", view)
// }

// func()
// func()
// func()
// func()


// ===================== solution ====================
// let view ;

// function func(){

//     let called = 0;

//     return () =>{

//         if(called > 0){

//             console.log("already called")

//         }else{

//             view = "utkarsh"
//             console.log("view => ", view)
//             called++;

//         }
//     }

    
// }

// const res = func()

// res()
// res()
// res()


// // =================== Output 2 
// console.log("===============================s")
// func()()
// func()()
// func()()


// ============================= Above Question "Once called" = Implementation using Polyfill || making it more generic funcion ===========================


// function once(func, context){
//     let ran;


//     return () => {

//         if(func){
//             ran = func.apply(context || this, arguments)
//             func = null;
//         }


//         return ran;

//     }

// }

// function hello(){
//     console.log("Hello there")
// }

// const res = once(hello)

// res()
// res()
// res()
// res()


// ========================== Function Currying =======================

// Example ========= f(a, b) into f(a)(b)

// function f(a){
//     return function(b){
//         console.log(a,b)
//     }
// }

// f(10)(20)

//  ======================Question Evaluate the following =================
// eval("sum")(4)(2) => 6
// eval("multiply")(4)(2) => 8
// eval("divide")(4)(2) => 2
// eval("substract")(4)(2) => 2


// function eval(operation){

//     return function (a){

//         return function (b){

//             if(operation === "sum") return a + b;
//             else if(operation === "multiply") return a * b;
//             else if(operation === "divide") return a / b;
//             else if(operation === "substract") return a - b;

//         }

//     }

// }

// console.log(eval("divide")(4)(2))



// ========================== INFINITE CURRYING =======================

// sum(2)(3) => 5
// sum(2)(3)(5) => 10

// function sum (a){

//     return function(b) {

//         if(b) return sum(a + b)
//         else return a;
//     }
// }


// console.log(sum(2)(3)(4)())


// ===================== CURRYING VS PARTIAL APPLICATION ================

// // Partial Application
// function sum(a){
//     return function(b, c){
//         return a + b + c;
//     }
// }

// const x = sum(10);
// console.log(x(5,6))


// // or

// console.log(sum(10)(5, 6))


// ===================== Currying in Javascript (Manipulating the dom ) =====================================
// function updateText(id){
//     return function(content){
//         document.getElementById(id).textContent = content
//     }
// }


// const updateHeader = updateText("heading")

// updateHeader("Hellow World!")
// updateHeader("Hellow Utkarshs!")


// ========================= Currying in Javascript ==========================

// ============== curry() implementation => f(a, b, c) into f(a)(b)(c)

