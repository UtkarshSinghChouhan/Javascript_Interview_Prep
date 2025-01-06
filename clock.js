const clockElement = document.getElementById("clock");

let seconds = 0;


const updateSeconds = () => {
    console.log("trigerred")

    if(seconds <= 50){
        clockElement.textContent = seconds++;
    }else{
        clearInterval(intervalId)
    }
}


const intervalId = setInterval(updateSeconds, 1000);