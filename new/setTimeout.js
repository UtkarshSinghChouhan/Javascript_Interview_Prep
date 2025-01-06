// function x(){
//     var i = 1;

//     setTimeout(() => {
//         console.log(i)
//     }, 3000)

//     console.log("Utkarsh")
// }

// x()


// function x(){

//     for(var i = 1; i <= 5; i++){
//         setTimeout(() => {
//             console.log(i)
//         }, i * 1000)
//     }


//     console.log("Utkarsh")
// }

// x()

// function x(){

//     for(let i = 1; i <= 5; i++){
//         setTimeout(() => {
//             console.log(i)
//         }, i * 1000)
//     }


//     console.log("Utkarsh")
// }

// x()


function x(){

    for(var i = 1; i <= 5; i++){

        function y(x){

            setTimeout(() => {

                console.log(x)
                
            }, x * 1000)

        }

        y(i)
    }


    console.log("Utkarsh")
}

x()