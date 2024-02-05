"use strict";
let fullname = window.prompt("Qual é o seu nome completo ?");
if (fullname.length == 0) {
  console.log("Falha ao iniciar o seu proprio nome");
  alert("Falha ao iniciar o seu proprio nome");
} else {
  alert(fullname.length >= 8 ? "SUCESSO" : "Nome inválido");
  console.log(fullname.toUpperCase());
}
