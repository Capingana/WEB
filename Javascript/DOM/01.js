let divisores = document.getElementsByTagName("div");
for (let i = 0; i < divisores.length; i++) {
  if (
    divisores[i].innerHTML == "Php" ||
    divisores[i].innerHTML == "Javascript" ||
    divisores[i].innerHTML == "Html" ||
    divisores[i].innerHTML == "Css"
  ) {
    divisores[i].style.color = "red";
  }
  console.log(divisores[i]);
}
