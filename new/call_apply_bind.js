let name = {
    firstName : "Utkarsh",
    lastName : "Chouhan",
    fullName : function(...args){
        console.log(this.firstName + " " + this.lastName + " " + args)
    }
}

name.fullName("age 23")

let name2 = {
    firstName : "Mayank",
    lastName : "Singh"
}


// Function Borrowing
// Each and every function in Js has access to "call()" method
name.fullName.call(name2, "age 21")



//During function borrowing function need not to be present in the object
function foo(name){
    console.log("Hi, I m foo " + name)
}

let obj = {}

foo.call(obj, "utkarsh")




// ================================= apply() method =====================
// The only difference between the call and the apply method is the way we pass the arguments

name.fullName.apply(name2, ["Utkarsh", "Singh", "Chouhan"])



// ========================= bind() method =======================
// The bind method binds the fucntion with the object and returns a function

let newName = name.fullName.bind(name2, "Sandhya Singh Chouhan")
console.log(newName)
console.log(newName())