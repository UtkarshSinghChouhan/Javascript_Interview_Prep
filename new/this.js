// let user = {
//     name : "Utkarsh",
//     age : 24,
//     childObj : {
//         name  : "Singh",
//         getDetails(){
//             console.log(this.name)
//         }
//     }
// }


// user.childObj.getDetails()





// class user{
//     constructor(n){
//         this.name = n
//     }

//     getName(){
//         console.log(this.name)
//     }
// }

// const User = new User("Utkarsh")
// console.log(User.getName())










// // ===================== OUTPUT based questions ================
// const user = {
//     firstName : "Utkarsh",
//     getName(){
//         const firstName = "Mayank"
//         return this.firstName;
//     }
// }

// console.log(user.getName()) // Utkarsh




// // ==================== Ques-02 =============
// function makeUser(){
//     return{
//         name : "John",
//         ref : this
//     }
// }

// let user = makeUser()
// console.log(user.ref.name) //currently ref points to the window object and the global window object doesn't have any name variable hence it will log nothing


// // TO fix the above problem so that It will point to the name: "Utkarsh"
// function foo(){
//     return{
//         name : "John",
//         ref(){
//             return this;
//         }
//     }
// }

// const newFoo = foo();
// console.log(newFoo.ref().name)




// // ============================ Question - 03 =====================
// const user = {
//     name : "Utkarsh Singh Chouhan",
//     logMsg(){
//         console.log(this.name)
//     }
// }

// setTimeout(user.logMsg, 1000)
// // setTimeout(() => user.logMsg(), 1000)



// ================= Create an Object Calculator ============
// let calculator = {
//     read(){
//         this.a = parseInt(prompt("a = ", 0));
//         this.b = parseInt(prompt("b = ", 0));
//     },
//     sum(){
//         return this.a + this.b;
//     },
//     mul(){
//         return this.a * this.b;
//     }
// }

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());




// ========================== OUTPUT QUESTION - 04 ======================
// var length = 4;
// function callback(){
//     console.log(this.length)
// }

// const obj = {
//     length : 5,
//     method(cb){
//         cb()
//     }
// }

// obj.method(callback)        //Output 4


// ======================== IMPLEMENT calc() ==============================

const calc = {
    total : 0,
    add(a){
        this.total += a
        return this;
    },
    multiply(b){
        this.total *= b
        return this;
    },
    substract(c){
        this.total -= c
        return this
    }
}


const res = calc.add(10).multiply(5).substract(30).add(10)
console.log(res.total)
