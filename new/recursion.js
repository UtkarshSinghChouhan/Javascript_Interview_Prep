// Evaluate sum(1)(2)(3)(4)...(n) 
// The function returns the sum of n-natural numbers

function sum(a){

    return function(b){

        if(!b) return a;
        
        return sum(a + b);
    }
}

let res = sum(1)(2)(3)(4)(5);
console.log(res())

// Output
// 15