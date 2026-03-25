import './style.css'

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailInput = document.querySelector("#email");
    const senhaInput = document.querySelector("#senha");
    const emailErro = document.querySelector("#emailErro");
    const senhaErro = document.querySelector("#senhaErro");

    emailErro.textContent = "";
    senhaErro.textContent = "";

    if (emailInput.value == "") {
        emailErro.textContent = "Email é obrigatório";
        return;
    }

    if (senhaInput.value == "") {
        senhaErro.textContent = "Senha é obrigatória";
        return;
    }

    window.location.href='index.html';
});
