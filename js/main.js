//controles javascript para estilar el menú de navegación responsive

const nav = document.querySelector("#nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

open.addEventListener("click", () => {
    nav.classList.add("visible");
})

close.addEventListener("click", () => {
    nav.classList.remove("visible");
})


//funcion para la animación del hero

function showSection() {
    setTimeout(function() {
        document.getElementById('hero').classList.add('appear');
    }, 500);
}