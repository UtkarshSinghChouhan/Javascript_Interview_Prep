// In JS, 
// "prototypes" are mechanism by which objects inherit properties and methods
// from another object. Every object in JS has an internal link to another object,
// known as "prototype"


// let obj = {
//     name : "Utkarsh",
//     age : 24,
//     profession : "Software Engineer",
//     getIntro : function(){
//         console.log(this.name + " age " + this.age)
//     }
// }

// let obj2 = {
//     name : "Mayank",
//     schooling : "MVM"
// }



// Prototype Chain
//  - If you try to access a property or method on an object and it doesn't exist on the object itself, JavaScript looks for it in the object's prototype.
//  - If it’s not found in the prototype, it keeps looking up the chain until it reaches the root object (Object.prototype). If it doesn’t find it anywhere, it returns undefined.




// // PROTOTYPAL INHERITANCE - Prototypal Inheritance is a feature in JavaScript where objects inherit properties and methods from other objects via the prototype chain.
//      - You can create an object that serves as a prototype for other objects.
//      - The child object can access the properties and methods of the prototype (parent object).

// obj2.__proto__ = obj






function foo(){}
function foo2(){}

// this declaration will set the "newProp" property to every fucntion the will be defined here
Function.prototype.newProp = function(){
    console.log("new Property")
}


let newObj = {}

Object.prototype.name = "Utkarsh Singh Chouhan"