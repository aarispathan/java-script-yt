function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

console.log(calculateCartPrice(100, 200, 300));


const user = {
    username: "coffee",
    prices: 199,
}

function handleObject(anyobject) {
    console.log(`Product name is ${anyobject.username} and price is ${anyobject.prices}`);
    
}

handleObject(user);
handleObject({
    username: "tea",
    prices : 299,
})

const myNewArray = [200, 400, 600]

function returnSecondValue (getArray) {
    return getArray[0]
}

console.log(returnSecondValue(myNewArray));
