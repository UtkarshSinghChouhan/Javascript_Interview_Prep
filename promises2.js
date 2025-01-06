console.log("Start")

const first = (name) => {

    return new Promise((resolve, reject) => {


        setTimeout(() => {

            resolve(name)

        }, 1000)
    })

}

const two = (name) => {
    return new Promise((resolve, reject) => {


        setTimeout(() => {

            resolve(name)

        }, 5000)
    })
}

const three = (name) => {

    return new Promise((resolve, reject) => {


        setTimeout(() => {
           
            // resolve(name)
            reject(new Error(`${name}`))

        }, 100)
    })
}


Promise.allSettled([
    first("utkarsh"),
    two("singh"),
    three("chouhan")
]).then((result) => [
    console.log(result)
]).catch((err) => {
    console.log(err)
})


// const result = async() => {
//     try{
//         const res1 = await first("utkarsh")
//         console.log(res1)

//         const res2 = await two("singh")
//         console.log(res2)

//         const res3 = await three("chouhan")
//         console.log(res3)


        

//     }catch(err){
//         console.log("inside catch",err)
//     }
// }

// result()



console.log("Stop")