const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

const user = {};

function handleSubmit(event) {
    event.preventDefault();
    
  const {
    elements: { email, password }
  } = event.currentTarget;

    if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
    }
    user.email = email.value;
    user.password = password.value;
    console.log(user);
    form.reset();
}