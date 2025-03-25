const name = "aaris"
const repoCount = 18

// console.log(name + repoCount + " Value");

console.log(`my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('aarisak')

console.log(gameName[0]); // key value pair access from this gmaename[0,1,2,3,4]
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(0,4)
// const gameName = new String('aarisak')  substring(0,4) is like aari 
// 0 = a, 1 = a, 2 = r, 3 = i
console.log(newString);

const anotherString = gameName.slice(-7, 6)
console.log(anotherString);


const newStringOne = "      sdjgnveroij      "
console.log(newStringOne);
console.log(newStringOne.trim());
//trim is avoid extra spaces feom lines


const url = "https://ak.com/aaris20%pathan"
console.log(url.replace('20%', "-"));
console.log(url.includes('khan'));
console.log(url.includes('aaris'));


console.log( gameName.split('-',));