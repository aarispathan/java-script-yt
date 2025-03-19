//value is number but showing in string
let score = 33
let valueInString = String(score)
// console.log(typeof score);
console.log(typeof(valueInString));

// "33" => 33
// "33sdhh" => NAN
// true => 1 , false => 0


//value is string but showing in number
let age = "18abc"
let valueInNumber = Number(age)
// console.log(typeof(age));
console.log(typeof(valueInNumber));
// console.log(valueInNumber);


// true => 1 , false => 0

//value is number but showing in boolean

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);


