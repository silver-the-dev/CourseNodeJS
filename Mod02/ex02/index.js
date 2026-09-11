/* @format */

const person = {
    nome: "Max",
    idade: 30,
    greet() {
        console.log("Hi i am " + this.nome);
    },
};

const printName = ({ nome }) => {
    console.log(nome);
};

printName(person);

const { nome, idade } = person;

console.log(nome, idade);

const hobbies = ["Sports", "Cooking"];
const [hobby1, hobby2] = hobbies;
console.log(hobby1 + ", " + hobby2);

// const copiedPerson = { ...person };
// console.log(copiedPerson);

// // for(let hobby of hobbies){
// //     console.log(hobby);
// // }
// // console.log(hobbies.map(hobby => "Hobby: " + hobby));
// // console.log(hobbies);
// const copiedArray = [...hobbies];
// console.log(copiedArray);

// const toArray = (...args) => {
//     return args;
// };

// console.log(toArray(1, 2, 3, 4));
