//controles javascript para estilar el menú de navegación responsive

const nav = document.querySelector("#nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

open.addEventListener("click", () => {
    nav.classList.add("visible");
});

close.addEventListener("click", () => {
    nav.classList.remove("visible");
});


//hero animations functions

function showSection() {
    setTimeout(function() {
        document.getElementById('hero').classList.add('appear');
    }, 500);
};

//agregando funciones js para botones de redes
const githubButton = document.querySelector("#github");
githubButton.addEventListener("click", () => {
    const githubUrl = "https://github.com/CrisMll";
    window.open(githubUrl, "_blank");
});

const linkedinButton = document.querySelector("#linkedin");
linkedinButton.addEventListener("click", () => {
    const linkedinUrl = "https://www.linkedin.com/in/crismll/";
    window.open(linkedinUrl, "_blank");
});

const cvButton = document.querySelector("#cv");
cvButton.addEventListener("click", () => {
    const cvUrl = "";
    window.open(cvUrl, "_blank");
});

const plastiscanButton = document.querySelector("#web-plastiscan");
cvButton.addEventListener("click", () => {
    const plastiscanUrl = "https://www.plastiscan.org/";
    window.open(plastiscanUrl, "_blank");
});


//COPY EMAIL

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

function copyEmail(){
    let url = document.getElementById('email-link');
    let button = document.getElementById('copyEmail-button'); 

    navigator.clipboard.writeText(url.textContent);
    alert ('Email copiado');
}

// PROJECTS SLIDER 

