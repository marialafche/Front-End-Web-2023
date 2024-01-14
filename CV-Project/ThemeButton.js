const button = document.getElementById("theme-button");

function changeTheme(){
    document.body.classList.toggle("theme");
}

button.addEventListener("click", changeTheme);