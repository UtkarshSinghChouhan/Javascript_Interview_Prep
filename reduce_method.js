// const nums = [10, 20, 30, 40, 50]

// const sum = nums.reduce((acc, curr) => {

//     return acc += curr

// }, 0)


// console.log(sum)



// ==================== map vs foreach method ==============


// MAP does not modify the original array  || returns an new array || Due to the return type we can chain methods like filter | reduce
// FOREACH  modify the original array       || returns undefined nothing || Due to the return type we cannot chain other method


// const arr = [10, 20, 30, 40, 50]

// const res = arr.map((val, idx) => {


//     return val + 2;

// })


// console.log(arr)
// console.log(res)



// arr.forEach((ele, idx) => {

//     arr[idx] += ele
    
// });


// console.log(arr)