// SCOPE - 
// It is a certain region of a program, where a defined variable exists and can be recognized

//  - Global Scope
//  - Block Scope
//  - Functional Scope



// Variable Shadowing

// function test(){

//     let a = "Hello"

//     if(true){
//         let a = "Utkarsh"           // newer declaration overradie the outer-declaration
//         console.log("*",a)
//     }
//     console.log(a)
// }

// test()



// Illegal Shadowing

// function test(){

//     let a = "Hello"
//     var b = "Utkarsh"

//     if(true){
//         var a = "Good Morning"           // newer declaration overradie the outer-declaration
//         let b = "Mayank"
//         console.log("*",a)
//     }
//     console.log(a)
// }

// test()



// // =================Declaration without Intialization =================
//  var a;
//  var a;


//  let b;
//  let b;


//  const c;
//  const c;





function abc(){

    console.log(a);
    console.log(b);
    console.log(c);

    const c = 30;
    let b = 20;
    var a = 10;
}

abc()


