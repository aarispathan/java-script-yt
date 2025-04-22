// const userEmail = "ak@gmail.com"
const userEmail = []

if (userEmail) {
    console.log("got user email");
} else{
    console.log("don't have user email");
}

// falsy value
// false, 0, -0, bigInt => 0n, null , undefined, nan, "" => empty string, without value

// truthy value 
// "0" => with value, 'false', " ", [], {}, function(){}, 


// if (userEmail.length === 0){
//     console.log("array is empty");
// }

const emptyIbject = {}

if (Object.keys(emptyIbject).length === 0) {
    console.log("object with empty");
    
}

// nullish caolescing operation (??): null, undefined

let val1;
val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 20 ?? 25

console.log(val1);

// terniary operator 

// condition ? true : false

const iceTeaPrice = 99
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

const TeaPrice = 50

TeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");