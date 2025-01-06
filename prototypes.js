let a = {
    name : "Harry",
    lang : "Javascript",
    run : () => alert("run1")
}


let p = {
    run : () => alert("run")
}

a.__proto__ = p