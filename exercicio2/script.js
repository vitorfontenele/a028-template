function escondeSenha(event){
    event.preventDefault();
    let passwordInput = document.getElementById("password");
    passwordInput.setAttribute("type", "password");
}

let form = document.querySelector("form");
form.classList.remove("light");
form.classList.add("dark");