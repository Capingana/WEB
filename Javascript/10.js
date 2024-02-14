const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");
const btn = document.querySelector("#btnEntrar");
const login = document.querySelector("#login-form");

login.addEventListener("input", () => {
 
if(userEmail.value.length>=0 && userPassword.value.length>=8){
    btn.disabled = false;
    btn.style.backgroundColor = "green";
}else{
    btn.disabled = true;
}

});

btn.addEventListener("click", () => {
  alert("Sucesso")
});
