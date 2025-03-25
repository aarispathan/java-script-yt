//JavaScript is a dynamic language.
// typeof can find data type
// Primitive Data Types

//  there 7 types of primitive data  types

// 1 string => "" , ''
// let name = "aaris";
// let email = 'ak';


// 2 symbol => using for value unique
// const id = Symbol('999')

// 3 boolean => true or false
// 4 bigInt => use for long number value
const bigNumber = 3467860939409560943409346879567n
console.log(typeof bigNumber);


// 5 null => empty
// 6 number
// 7 undefined


// Nonprimitibe Data Types (Reference)

// Array  example
// array always in square brakets
// const myFrdName = ["Aaris", "Aaris", "Aaris"]



// Object  example
// object always in curly brakets
// const mySelf = {
//     name: "Aaris",
//     age: 20,
// }


// fonctions example
const myFunction = function (){
    console.log("Aaris");
}
console.log(typeof (myFunction));


/////////////////////////////////////////////////////////////


// stack (Primitive) , Heap (non-primitive)

let myEmail = "aarispathan1234@gmail.com"

let anotherName = myEmail

anotherName = "pathanaris4321@gmail.com"

console.log(myEmail);
console.log(anotherName);


let userOne = {
    email : "hitesh@gmail.com",
    upi : "dsvsrher@ybl"
}

let userTwo = userOne

userTwo.email = "ravi@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

