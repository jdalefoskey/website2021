const array = [1,2,55,76,34,58,22].sort();
const array2 = ["dale", "tai","goosey","mj", "bao"].sort();
let newPerson = {name: "dale", sex: "male"};
let newPerson2 = {name: "tai", sex: "male"};
let personArray = [newPerson,newPerson2];
let array3 = [...array, ...array2];
let [a,b] = array2;

console.log(a,b);