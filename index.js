// console.log("utkarsh")


// function func(){
//     console.log("Hello world!")
//     console.ed("sdf")
// }

// func()

// =============================================================

// var teacher = "Utkarsh Singh Chouhan"

// function func(){
//     var teacher = "mayank Singh Chouhan";
//     console.log("Hello", teacher)
// }

// function gunc(){
//     var student = "Sunny"
//     console.log("Welcome", student)
// }


// func();
// gunc();

// =======================Auto globals===========================

var teacher = "Utkarsh Singh Chouhan"

function func(){
    var teacher = "mayank Singh Chouhan";
    content = "Javascript"
    console.log("Hello", teacher)
}

function gunc(){
    var student = "Sunny"
    console.log("Welcome", student)
}




func();
gunc();
console.log(teacher, content)

// ========================var scope===========================


// if(true){
//     var name = "utkarsh";
// }

// console.log(name)