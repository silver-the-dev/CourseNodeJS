const name = "Max";
const age = 29;
const hasHobbies = true;
function summarizeUser(userName, userAge, userHasHobby) {
  return 'Name is ' + userName + ', age is ' + userAge + ' and the user has hobbies: ' + userHasHobby;
}

const add = (a, b) => {
  return a + b;
}
console.log(add(1, 2));

console.log(summarizeUser(name, age, hasHobbies));
console.log(name);


