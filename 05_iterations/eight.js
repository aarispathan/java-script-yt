const myNums = [1, 2, 3, 4]

// const myTotal = myNums.reduce(function(acc,currectValue){
//     console.log(`acc: ${acc}   current: ${currectValue}`);

//     return acc + currectValue
//  }, 0)

const myTotal = myNums.reduce((acc, current) => (
    acc + current
), 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 299
    },
    {
        itemName: "java course",
        price: 599
    },
    {
        itemName: "c++ course",
        price: 699
    },
    {
        itemName: "react course",
        price: 899
    },
]
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
