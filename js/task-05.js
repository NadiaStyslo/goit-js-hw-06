const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

const onInput = ({ currentTarget }) => {
    outputName.textContent = currentTarget.value;
    if (inputName.textContent === '') {
        outputName.textContent = 'Anonymous'
    }
};
inputName.addEventListener("input", onInput)