function Person(firstname, lastname, age, hobbies) {
    // ====================== Mesmo objecto mas de outra forma de chamada O CHAMADO LITERAL
  this.primeiroNome = firstname;
  this.ultimoNome = lastname;
  this.idade = age;
  this.hobbies = hobbies;
  this.fullname = () => {
    return this.primeiroNome + " " + this.ultimoNome;
  };
}

let newPerson = new Person("Sabino", "Capingana", 23, [
  "Ver filme",
  "Formula 1",
  "Cerveja fresca",
]);

console.log(newPerson.hobbies);
console.log(newPerson.fullname());

// ====================== Mesmo objecto mas de outra forma de chamada O CHAMADO LITERAL
let nome = "Sabino Capingana";
let idade = 45;
let nomesarray = ["capingana", "florença", "Pedro", "Antunes"];
const Pessoas = {
  name: nome,
  age: idade,
  nomes:nomesarray
};

const {name,age,nomes}=Pessoas;

for(let i=0;i<10;i++){
    Pessoas.nomes.push("Gasolina");
}


console.log(Pessoas.nomes);
// ================= TERCEIRA FORMA DE CRIAR OBJECT
