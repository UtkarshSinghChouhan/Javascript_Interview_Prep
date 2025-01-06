// A POLYFILL is a peice of code that add a feature to Javascript, allowing
//  you to use newer methods or functionalities in environments where they are
// not natively supported


// ==============map() method===============
const nums = [10, 20, 30, 40, 50]
const mappedArr = nums.map((item, idx, arr) => {
    return item * 2
})

console.log(mappedArr)


// ================= Polyfill for map() method
Array.prototype.myMap = function(callback){
    let originalArr = this;
    let resultantArr = [];

    originalArr.forEach((item, idx) => {
        resultantArr.push(callback(item, idx, originalArr))
    })

    return resultantArr;

}

const newMappedArr = nums.myMap((item) => {
    return item + 5;
})

console.log(newMappedArr)











// ====================== filter() method ====================
const arr = [5, 10, 15, 20, 25, 30, 35, 40];

const filteredArr = arr.filter((item, idx) => {
    return !(item % 10);
})

console.log(filteredArr)

// ============== Polyfill for the filter() method ==================
Array.prototype.myFilter = function(callback){
    const originalArr = this
    let resultantArr = []

    originalArr.forEach((item, idx) => {
        if(callback(item, idx, originalArr)) resultantArr.push(item)
    })

    return resultantArr
}

const newFilteredArr = arr.filter((item) => !(item % 5))
console.log(newFilteredArr)




// ==================== reduce method ======================
const arrToReduce = [10, 20, 30, 40, 50]

const reducedArr = arrToReduce.reduce((acc, currVal, idx, arr) => acc + currVal, 0)

console.log(reducedArr)



// ===================== Polyfill for reduce() method ===================

Array.prototype.myReduce = function(callback, init){

    const originalArr = this;
    let acc = (init !== undefined) ? init : originalArr[0];


    originalArr.forEach((item, idx) => {
        acc = callback(acc, item, idx, originalArr)
    })
    return acc;
}

const newReducedArr = arrToReduce.myReduce((acc, currVal, idx, arr) => acc + currVal, 0)
console.log(newReducedArr)







// ==================== Difference between map() and forEach() method
//  1 - return type map(new Arr) and forEach(undefined-modify the original Arr)
//  2 - Chainign is possible in map not in forEach method


let objArr = [
    {name : "Utkarsh", marks : 99, age : 23},
    {name : "Mayank", marks : 49, age : 21},
    {name : "Sandhya", marks : 69, age : 55},
]

const totalMarks = objArr.map((item, idx) => {
    if(item.marks > 50) item.marks + 50;
    return item
}).filter((item) => item.marks === 69)

console.log("totalMarks ====== ", totalMarks)