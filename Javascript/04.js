// Arrow function

let multiplication = (PI, area) => {
  if (area >= 0) {
    return PI * (area * area);
  } else {
    return false;
  }
};
// ====================================================
const verificador = () => {
  const PI = 3.14;
  const res = multiplication(PI, 10);
  if (res == false) {
    console.log("Ups,o valor da multiplicação foi negativa porque vale:" + res);
  } else {
    console.log(
      "Parabéns,o valor da multiplicação foi positiva, e vale:" + res
    );
  }
};

verificador();
