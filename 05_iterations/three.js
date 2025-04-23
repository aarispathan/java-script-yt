// for of loops

const arr = [1, 2, 3, 4, 5, 6]

for (const value of arr) {
    // console.log(value);
}

const greeetings = "hello world !"

for (const greet of greeetings) {
    // console.log(`each character is ${greet}`);
}

// Map

const map = new Map()
map.set("IN", "INDIA")
map.set("US", "UNITED STATE OF AMERICA")
map.set("FR", "FRANCE")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);

}

const myObj = {
    game1 : "pubg",
    game2 : "bgmi",
    game3 : "ff"
}

// for (const [key, value] of myObj) {
//     console.log(key , "=>" , value);
// }

