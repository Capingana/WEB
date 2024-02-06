// Criando Função dentro de uma função;
// A principal será a função de multiplicação e dentro teremos uma verificação dos valores

const verificador = () => {
  // ====================================== 1
  const multiplication = (valueOne, valueTwo) => {
    if (valueOne == 0 || valueTwo == 0) {
      return false;
    }
    return valueOne * valueTwo;
  };
  let mult = multiplication(2, 20);
  // ====================================== 2
  const verificando = () => {
    if (mult == false) {
      console.log("The result is negative:" + mult);
    } else {
      console.log("The result is positive:" + mult);
    }
  };
  return verificando();
};
// ==================================Executando a função principal
verificador();
