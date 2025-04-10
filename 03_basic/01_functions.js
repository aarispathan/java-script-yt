// function myName (){
//     console.log("a");
//     console.log("a");
//     console.log("r");
//     console.log("i");
//     console.log("s");
// }

// myName();

// function addToNumber (number1 , number2){
//     console.log(number1 + number2);
// }

function addToNumber (number1 , number2){
    // let result = number1 + number2
    // return result // result ke baad ki value print nahi hoti
    // console.log(aaris);
    
    return number1 + number2
}

const result = addToNumber(5 , 6)

// console.log("Result :", result);

function loginUser (username) {
    if(!username){  
        console.log("enter user name");
        return 
    }
    return `${username} just logged in `
}

// console.log(loginUser("Aaris Pathan"))
console.log(loginUser())


