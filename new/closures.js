// The ability of a function to access variables and function out of its scope is known as CLOSURES
// A function along with its lexical Scope bundles together forms a Closure

// function x(){
//     var a = 10
//     function y(){
//         console.log("x = ", x);
//     }

//     y()
// }

// x()


// Imagine a Backpack
// A function in JavaScript is like a backpack.
// When you create a function inside another function, the inner function gets a backpack.
// This backpack stores things (variables) from the outer function where the inner function was created.



// EXAMPLE IN REAL LIFE

// Suppose, Kitchen(the outer function)
// I make a "Sandwich"(variables)
// Then I left the kitchen and went to the park (the outer fucntion is gone)
// But I still have backpack with sandwich in it

// function kitchen(){
//     var sandwich = "Cheese Sandwich"

//     function backpack(){
//         return sandwich;
//     }

//     return backpack;
// }

// const myBackpack = kitchen()
// console.log(myBackpack())



function x(){
    var a = 7

    function y(){
        console.log(a)
    }

    a = 100

    return y;
}

console.log(x()())




// EXAMPLES OF CLOSURES
// - once() function (function which can only be called once)
// - memoize