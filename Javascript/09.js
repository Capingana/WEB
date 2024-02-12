let Person = [
  {
    id: 1,
    firstname: "Sabino",
    lastname: "Capingana",
    age: 23,
    isCompleted: true,
  },
  {
    id: 2,
    firstname: "José",
    lastname: "Capingana",
    age: 3,
    isCompleted: true,
  },
  {
    id: 3,
    firstname: "Pedro",
    lastname: "Capingana",
    age: 2,
    isCompleted: false,
  },
  {
    id: 4,
    firstname: "Ana",
    lastname: "Capingana",
    age: 20,
    isCompleted: true,
  },
];

console.log("Alunos aprovados:");
console.log("===================");
let pegandoElementos = Person.map((el, position) => {
  if (el.isCompleted) {
    console.log(el.firstname + " " + el.lastname);
   
  } 

});
