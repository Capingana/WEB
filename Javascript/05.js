// Função dentro de outra função

const soma = (...valores) => {
  //   =========================================
  //   Função que está dentro da outra função
  const somador = (val) => {
    let res = 0;

    for (numero of val) {
      res += numero;
    }
    return res;
  };
  
  return somador(valores);

  // =========================================
};

console.log(soma(5, 10, 15));
