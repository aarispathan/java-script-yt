// const user = {
//     username : "aaris",
//     price : 999,

//     welcomeMessage : function () {
//         console.log(`welcome ${this.username} and your order price is ${this.price}`);
//         console.log(this);
        
//     }
// }
// user.welcomeMessage();
// console.log(user.welcomeMessage);
// console.log(this);

// function one () {
//     console.log(this.username);
//     let username = "aaris"
// }

// one();

// const two = function () {
//     console.log(this.username);
//         let username = "aaris"
// }
// two();


// const three =()=>{
//     let username = "aaris" 
//     console.log(this.username);
    
// }
// three();

// const four =(num1,num2)=>{
//     return num1 + num2
// }

// const four =(num1,num2)=> num1 + num2 
const four =(num1,num2)=> (num1 + num2)

 console.log(four(5,9));

//  const myArray =[2,5,9,6,3]

//  myArray.forEach()