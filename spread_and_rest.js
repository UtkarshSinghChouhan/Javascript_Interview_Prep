//  ======================== REST OPERATOR ===================

function foo(...args){
    return typeof args;
}

console.log(foo(1, 2, 4, 5))


// ================
const myInfo = {
    name : "Utkarsh",
    age : "23",
    profession : "Engineer"
}

const {name, ...restInfo} = myInfo

console.log(name);
console.log(restInfo)


const [first, ...restArr] = [1,2 , 3,4, 5,]

console.log(first);
console.log(restArr)


// =================== SPREAD OPERATOR ================
  const arr = [1, 2,3, 4, 5]

  const arr1 = [10, 20, ...arr]

  console.log(arr1)