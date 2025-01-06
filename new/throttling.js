let counter = 0;

function getData(){
    console.log("Fetching Data...", counter++);
}

function throttle(fn, d){

    let executionTime = Date.now();
    let trigerred = 0;

    return function(...args){
        console.log("trigerred => ", trigerred++);

        if(executionTime + d < Date.now()){

            fn(...args);
            executionTime = Date.now();

        }
    }
}

const throttledGetDate = throttle(getData, 3000)

// setInterval(throttledGetDate, 100)