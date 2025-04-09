// const instaUser = new object();  // singleton object
const instaUser1 = {};  // non singleton object

instaUser1.id = "15654";
instaUser1.name = "shaz";
instaUser1.isLoggedIn = true


// console.log(instaUser1);


const regularUser = {
    email : "shaz@gmail.com",
    location : "gj",
    fullname : {
        userfullname : {
            firstname : "aaris",
            lastname : "pathan",
        }
    },
}
// console.log(regularUser.fullname);
// console.log(regularUser.fullname?.userfullname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}


// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4) 

const obj3 = {...obj1, ...obj2, ...obj4}

// console.log(obj3);

const users = [
    {
        id : 111,
        email : "ak@2355gmail.com",
    },
    {
        id : 222,
        email : "ak@2355gmail.com",
    },
    {
        id : 333,
        email : "ak@2355gmail.com",
    },
    {
        id : 444,
        email : "ak@2355gmail.com",
    }
]

users[1].email

console.log(instaUser1);


console.log(Object.keys(instaUser1)); 
