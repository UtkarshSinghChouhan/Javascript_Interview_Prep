// ================= bind() method ==============

const person = {
    name : "Alice"
}

function sayHello(greetings){
    console.log(`${greetings}, my name is ${this.name}`)
}

const newFunction = sayHello.bind(person, "Morning")
// newFunction()


// ==================== Polyfill for bind() method =================
// It means we are creating our own implementation of bind() method

// Checking if the bind already exists or not, weather the browser or runtime already supports bind or not
if(!Function.prototype.myBind){

    Function.prototype.myBind = function(context, ...args){

        let originalFunction = this;

        return function(...newArgs) {
            originalFunction.apply(context, [...args, ...newArgs])
        }
    }

}

const newPerson = {
    name : "Sandhya"
}

function printName(...args){
    console.log(`my name is ${this.name} ${args}`)
}

let printName2 = printName.myBind(newPerson, "Singh", "Chouhan")
printName2()