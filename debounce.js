const btn = document.querySelector(".incre_btn")

const btnPress = document.querySelector(".increment_pressed")

const count = document.querySelector(".increment_count")


console.log(count)

var pressedCnt = 0;
var trigerredCnt = 0;


// // Loadash implementation
// const debouncedCnt = _.debounce(() => {
//     trigerredCnt += 1;
//     count.textContent = trigerredCnt

// }, 800)


const myDebounce = (cb, delay) => {

    let timer;


    return () => {

        if(timer){
            clearTimeout(timer)
        }

        timer = setTimeout(() => {

            cb()

        }, delay)
    


    }

}

const debouncedCnt = myDebounce(() => {
    trigerredCnt += 1;
    count.textContent = trigerredCnt

}, 800)


btn.addEventListener('click', () => {
    pressedCnt += 1;
    btnPress.textContent = pressedCnt;


    debouncedCnt()

})