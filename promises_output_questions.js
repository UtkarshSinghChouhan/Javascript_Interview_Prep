// ================== Question - 01 ======================

// console.log("start")

// const p1 = new Promise((resolve, reject) => {
//     console.log(1)
//     resolve(2)
// })


// p1
// .then((result) => console.log(result))

// console.log("stop")


// Output
// Start
// 1
// Stop
// 2












// ================== Question - 02 ======================

// console.log("start")

// const p1 = new Promise((resolve, reject) => {
//     console.log(1)
//     resolve(2)
//     console.log(3)
// })

// p1.then((result) => console.log(result))

// console.log("stop")

// Output

// start
// 1
// 3
// stop
// 2












// ================== Question - 03 ======================

// console.log("start")

// const p1 = new Promise((resolve, reject) => {
//     console.log(1)
//     console.log(3)
// })

// p1.then((result) => console.log(result))        //it is not undefined it will not go insode the then block, since there isn't any resolve statement inside the promise

// console.log("stop")














// ================== Question - 03 ======================


// console.log("start")


// const fn = () => 
//     new Promise((resolve, reject) => {
//         console.log(1)
//         resolve("success")
//     })

// console.log("middle")



// fn().then((res) => {
//   console.log(res)  
// }).catch((err) => {
//     console.log(err)
// });


// console.log("stop")

















// ================== Question - 04 ======================

// function job(){

//     return new Promise(function(resolve, reject){
//         reject()
//     })

// }

// let promise = job();


// promise
// .then(function(){
//     console.log("Success 1")
// })
// .then(function(){
//     console.log("Success 2")
// })
// .then(function(){
//     console.log("Success 3")
// })
// .catch(function(){
//     console.log("Error 1")
// })
// .then(function(){
//     console.log("Success 4")
// })













// ================== Question - 05 ======================


// function job(state){
//     return new Promise(function(resolve, reject){

//         if(state){

//             resolve("success")

//         }else{

//             reject("error")

//         }
        

//     })
// }


// let p = job(true);

// p.then(function(data){

//     console.log(data)

//     return job(false)

// }).catch(function(err){

//     console.log(err)

//     return "Error Caught"

// }).then((data) => {

//     console.log(data)

//     return job(true)

// }).catch((err) => {

//     console.log(err)

// })















// ================== Question - 06 Implementation Question ======================

// const firstPromise = new Promise((resolve, reject) => {
//     resolve("First!")
// })


// const secondPromise = new Promise((resolve, reject) => {

//     resolve(firstPromise)
// })

// secondPromise.then((result) => {
//     return result;
// }).then((result) => {
//     console.log(result)
// })













// ================== Question - 07 Rewrite the following using async/await instead of '.then/catch' ======================


// function loadJson(url){
//     return fetch(url).then((response) => {

//         if(response.status == 200){
//             return response.json();
//         }else{
//             throw new Error(response.status)
//         }


//     })
// }

// loadJson("https://fakeurl.com/no-such-user.json").catch((err) => {
//     console.log(err)
// })

// ======================= ASYNC AWAIT IMPLEMENTATION ============================


// const loadJson = async(url) => {

//     try{
//         const res = await fetch(url);
        
//         if(res.status == 200){
//             const resJson = await  res.json()
//             return resJson
//         }else{
//             throw new Error(res.status)
//         }

//     }catch(err){
//        console.log(err)
//     }
// }

// loadJson("url string")



// ============================= SOLVE PROMISES RECURSIVELY


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
    
            res(`Hi, its me ${name}`)
            // rej(new Error(`Hi, its me ${name}`))
    
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


const promiseRecursive = (promises) => {
    if(promises.length === 0) return

    const p = promises.shift();

    p.then((result) => console.log(result)).catch((err) => console.log(err))

    promiseRecursive(promises)
} 



promiseRecursive([
    impAction("one"),
    sayHello("two"),
    ask("three")
])