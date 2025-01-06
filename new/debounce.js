// A Debounced function is a function whose execution is delayed by t-millisecond
// and its execution gets cancelled if it is called again within that time-frame.

let counter = 0;

function getDate(){

    console.log("Fetching Data...", counter++)

}


function debounce(fn, d){
    var timeoutId;

    return function(...args){

        clearTimeout(timeoutId)

        timeoutId = setTimeout(() => fn(...args), d)
    }

    
}

const debouncedGetData = debounce(getDate, 1000)




// When you call clearTimeout(timeoutId) on a timeoutId whose timer has already executed:

// No Effect on the Already Executed Timer:

// Once a setTimeout callback is executed, it is no longer active. Calling clearTimeout on its timeoutId does nothing.
// In this case, the clearTimeout(timeoutId) is effectively ignored.
// No Errors Occur:

// JavaScript does not throw an error or warning when clearTimeout is called on an invalid or expired timer ID. It simply does nothing.
// timeoutId Gets Overwritten Safely:

// After clearing the previous timeout (even if it's already executed), a new setTimeout is created, and timeoutId is updated with the new timer's ID.