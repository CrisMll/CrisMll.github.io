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

//agregando funciones js para botones de redes
const githubButton = document.querySelector("#github");
githubButton.addEventListener("click", () => {
    const githubUrl = "https://github.com/CrisMll";
    window.open(githubUrl, "_blank");
})

const linkedinButton = document.querySelector("#linkedin");
linkedinButton.addEventListener("click", () => {
    const linkedinUrl = "https://www.linkedin.com/in/crismll/";
    window.open(linkedinUrl, "_blank");
})

const cvButton = document.querySelector("#cv");
cvButton.addEventListener("click", () => {
    const cvUrl = "";
    window.open(cvUrl, "_blank");
})

const emailLink = document.getElementById('emailLink');
const clipboardIcon = document.getElementById('email-clipboard');

clipboardIcon.addEventListener('click', () => {
    const tempInput = document.createElement('input');
    tempInput.value = emailLink.innerText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('Correo electrónico copiado: ' + emailLink.innerText);
});

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))