const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

const onInput = ({ currentTarget }) => {
    outputName.textContent = currentTarget.value;
    if (!currentTarget.value) {
        outputName.textContent = 'Anonymous'
    }
};
inputName.addEventListener("input", onInput)