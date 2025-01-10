// const stars_container = document.getElementById("star_rating");
// const stars = stars_container.querySelectorAll("span")

// stars.forEach((star, idx) => {

//     star.addEventListener('click', () => {

//         const currentRating = idx;

//         stars.forEach((s, i) => {
//             s.classList.toggle("active", i <= currentRating)
//         })

//     })

// })



// ================= EVENT BUBBLING OPTIMIZATION ===================

const stars_container = document.getElementById("star_rating");
const stars = stars_container.querySelectorAll("span")

stars_container.addEventListener("click", (e) => {

    const currentRating = parseInt(e.target.getAttribute("data-value"), 10);

    console.log("trigerred")

    stars.forEach((s, i) => {
        s.classList.toggle("active", i < currentRating)
    })

})