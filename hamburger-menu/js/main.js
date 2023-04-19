// const nav = document.querySelector("#nav");
// const abrir = document.querySelector("#abrir");
// const cerrar = document.querySelector("#cerrar");

// abrir.addEventListener("click", () => {
//     alert("hello")
//     nav.classList.add("nav-visible");
// })

// cerrar.addEventListener("click", () => {
//     nav.classList.remove("nav-visible");
// })


const abrir = document.getElementById("abrir")
const cerrar = document.getElementById("cerrar")
const nav = document.getElementById("nav")

abrir.addEventListener('click', () => {
    nav.classList.add("nav-visible")
})

cerrar.addEventListener('click', () => {
    nav.classList.remove("nav-visible")
})