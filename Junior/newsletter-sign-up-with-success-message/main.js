
const form = document.querySelector("form");
const emailInput = document.querySelector("#email-input");
const section = document.querySelector("section");
const modal = document.querySelector("dialog");
const dismissBtn = document.querySelector("#dismiss-btn");
const userEmail = document.querySelector("#user-email");

let email;

form?.addEventListener('submit', (e)=> {
    e.preventDefault();
    if(emailInput.value === '') {
        emailInput.setCustomValidity("Please enter a valid email address.");
    }else{
        userEmail.innerHTML = emailInput.value;
        section.classList.add("hidden");
        section.classList.remove("lg:flex");
        modal.showModal();
    }

    emailInput.addEventListener('input', () => {
        emailInput.setCustomValidity("");
    });
})

dismissBtn?.addEventListener('click', () => {
    modal.close();
    section.classList.remove("hidden");
    section.classList.add("lg:flex");
    emailInput.value = "";
});