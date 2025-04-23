const myObj = {
    js : "javascript",
    cpp : "c++",
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in myObj) {
    // console.log(`${key} for ${myObj[key]}`);
}

const programming = ["js", "rb" , "py" , "java", "cpp"]

for (const key in programming) {
//    console.log(`${key} and ${programming[key]}`);
}


const map = new Map()
map.set("IN", "INDIA")
map.set("US", "UNITED STATE OF AMERICA")
map.set("FR", "FRANCE")

// for (const key in map) {
//    console.log(key);
// }