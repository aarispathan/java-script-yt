// singleton

// object literals
const mySymb = Symbol("key1")

const jsUser = {
    name : "aaris",
    email : "aaris122.com",
    age : 20,
    location : "gj",
    isLoggedIn : true, 
    [mySymb] : "key2",
}
jsUser.email = "ak@gmail.com"
// Object.freeze(jsUser)

jsUser.email = "ak@gmail.com"

console.log(jsUser);
// console.log(jsUser["name"]);
// console.log(jsUser.isLoggedIn);
// console.log(jsUser[mySymb]);


jsUser.greeting = function () {
    console.log(`hello js user, ${this.name}, ${this.age}`);
}
console.log(jsUser.greeting);

console.log(jsUser.greeting());
