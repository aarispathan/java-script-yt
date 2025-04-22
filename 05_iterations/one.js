// for loop 

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element);
// }


// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
// }
// console.log(element); this is not accesseble


// for (let index = 0; index < 10; index++) {
//     const element = index;
//     if(element == 5){
//        console.log("5 is best number");
//     }
//     console.log(element);
// }

for (let i = 0; i <= 7; i++) {
    // console.log(`outer loop value: ${i}`);
    
    for (let j = 0; j <= 3; j++) {
        // console.log(`inner loop value ${j} and outer value: ${i}`);
        // console.log(i + '*' + j + ' = ' + i*j );
    }
}


let myArray = ["iron man", "superman","spider man"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
        // console.log(element);
        
}   

// break and continue 

// for (let index = 0; index <= 20; index++) {
//         if (index == 5) {
//             console.log(`detected 5`);
//             break;
//         }
//     console.log(`value of index is ${index} `);
// }


for (let index = 0; index <= 20; index++) {
        if (index == 5) {
            console.log(`detected 5`);
            continue
        }
    console.log(`value of index is ${index} `);
}