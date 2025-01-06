// Synchronous vs Asynchronous Code

// Javascript Runs Synchronous Code First then Asynchronous Code


// //=========================== AsyncBehaviour  Example - 01
console.log("Start")

setTimeout(() => {
    console.log("Hi, its me Utkarsh")
}, 1000)

console.log("Finish")


//========================= AsyncBehaviour  Example - 02

console.log("Start")

function impAction(userName){

    setTimeout(() => {
        return `Hi This is ${userName}`
    }, 1000)

}


const msg2 = impAction(`Utkarsh`)
console.log(msg2)
console.log("stop")



//========================= AsyncBehaviour  Example - 02 (CALL BACK HELL)

console.log("Start")

function impAction(userName, callback){

    setTimeout(() => {


        callback(userName)


    }, 1000)

}


function sayHello(name, cb){

    setTimeout(() => {

        cb(`Hi, its me ${name}`)

    }, 0)


}


function ask(ques, cb){

    setTimeout(() => {

        cb(ques)

    }, 0)

}

const msg = impAction(`Utkarsh`, (message) => {

    console.log(message);

    sayHello("Utkarsh", (res) => {

        console.log(res)


        ask("How about you?", (res) => {
            
            console.log(res)
        })

    })

})

console.log("stop")


// ============================= PROMISES ==============================

// Promise represents the upcoming completion and failure of an asynchronous event and  its resulting value

console.log("start")

const sub = new Promise((resolve, reject) => {

    setTimeout(() => {

        const result = true;

        if(result)  resolve(`Hi, its me Utkarsh`);
        else reject(new Error(`Oops an error occured`))


    }, 2000)


})




sub.then((result) => {

    console.log(result)

}).catch((err) => {

    console.error(err)

}).finally(() => {

    console.log("task done")

})

console.log("stop")




// =================================================================ANOTHER PROSIME EXAMPLE BEING RESOLVED or REJECT INSTANTLY


// const sub = Promise.resolve("Hi, its me");
// // const sub = Promise.reject("Hi, its me");

// sub.
// then((result) => console.log(result)).
// catch((err) => console.log(err))


// ======================== IMPLEMENTING EXAMPLE -01 (CALLBACK HELL WITH PROMISES)

console.log("Start")

function impAction(userName){

    return new Promise((res, rej) => {
        
        setTimeout(() => {
    
    
            res(userName)
    
    
        }, 10)

    })

}


function sayHello(name){

    return new Promise((res, rej) => {
        
        setTimeout(() => {
    
            // res(`Hi, its me ${name}`)
            rej(new Error(`Hi, its me ${name}`))
    
        }, 1000)



    }, 1000)



}


function ask(ques){

    return new Promise((res, rej) => {
        
        setTimeout(() => {
    
            res(ques)
    
        }, 0)
    })


}



// ========================== Promise HELL
impAction("Utkarsh").
then((res) =>{

    console.log(res)
    
    sayHello("Mayank").
    then((result) => {
        console.log(result)

        ask("How are you?").
        then((result) => console.log(result)).
        catch((err) => console.log(err))

    }).
    catch((err) => {
        console.log(err)
    })

}).
catch((err) => console.log(err))


//============================= Using Promise Chaining
impAction("Utkarsh")
.then((result) => {
    console.log(result)
    return sayHello("Hi, its me Mayank")
})
.then((result) => {
    console.log(result)

    return ask("How are you?")
})
.then((result) => {
    console.log(result)
})
.catch((err) => console.log(err))


//================================ Promise Combinators(Promise.all())

// Proise combinator helps us to execute more than one promise at a time and it returns the array of all the fullfilled promises and if any one promise fail then the entire execution fails



Promise.all([
    impAction("Utkarsh"),
    sayHello("Raj"),
    ask("How about you?")
])
.then((res) => {
    console.log(res)
})
.catch((err) => {
    console.log(err)
})


//=================================== Promise Combinator (Promise.race())

// ============= it returns the promise which gets resolved first weather a resolve or reject


Promise.race([
    impAction("one"),
    sayHello("two"),
    ask("three")
])
.then((res) => {
    console.log(res)
})
.catch((err) => {
    console.log(err)
})







//=================================== Promise Combinator (Promise.allSetteled())

// =========== it will return the an array of all the promises weather resolved or rejected


Promise.allSettled([
    impAction("one"),
    sayHello("two"),
    ask("three")
])
.then((res) => {
    console.log(res)
})
.catch((err) => {
    console.log(err)
})


//=================================== Promise Combinator (Promise.any())

// it only returns the first fullfilled promise and ignores the rejected one


// if all the promises failed only in that case it will give the error

Promise.any([
    impAction("one"),
    sayHello("two"),
    ask("three")
])
.then((res) => {
    console.log(res)
})
.catch((err) => {
    console.log(err)
})


// console.log("stop")




// =========================================================================
// =========================================================================

// ======================= ASYNC AWAIT ========================






function impAction(userName){

    return new Promise((res, rej) => {
        
        setTimeout(() => {
    
    
            res(userName)
    
    
        }, 10)

    })

}


function sayHello(name){

    return new Promise((res, rej) => {
        
        setTimeout(() => {
    
            // res(`Hi, its me ${name}`)
            rej(new Error(`Hi, its me ${name}`))
    
        }, 1000)



    }, 1000)



}


function ask(ques){

    return new Promise((res, rej) => {
        
        setTimeout(() => {
    
            res(ques)
    
        }, 0)
    })


}


const result = async() => {

    try {
        const msg1 = await impAction("one");
        const msg2 = await sayHello("two");
        const msg3 = await ask("three");
    
        console.log(msg1)
        console.log(msg2)
        console.log(msg3)
        
    } catch (error) {
        console.log(error)
    }
}

result()