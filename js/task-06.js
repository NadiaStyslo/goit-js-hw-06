const nameInput = document.querySelector("#validation-input");
const focusChange = (event) => {
    if (event.currentTarget.value.length === Number(nameInput.dataset.length)) {
        nameInput.classList.remove("invalid");
        nameInput.classList.add("valid");
    } else {
        nameInput.classList.add("invalid");
        nameInput.classList.remove("valid");
    }
}
nameInput.addEventListener('blur', focusChange)