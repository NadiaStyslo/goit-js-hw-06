const form = document.querySelector(".login-form");
form.addEventListener("submit", handleSubmit)
function handleSubmit(event) {
    event.preventDefault()
    const  { email, password }
    = event.currentTarget.elements;
    if (email.value === "" || password.value === "") {
         return alert('Всі поля повинні бути заповнені')
    }
    const dataInput = {
        email: email.value,
        password: password.value
    };
        
    console.log (dataInput);
event.currentTarget.reset();
    }


