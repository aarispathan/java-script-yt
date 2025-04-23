// const coding = ["js", "java", "python", "react"]
// const values =coding.forEach((item)=>{
//     console.log(item);
//     return item
// })

// console.log(values);


// const myNumbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNumbs.filter( (num)=>{
//    return num > 4
// } )


// const newNums = [] 
// newNums.forEach(()=>{
//     if (num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const books = [
    {title : "book one", genre : "fiction", publish: "1981", edition: 2004},
    {title : "book two", genre : "non-fiction", publish: "1988", edition: 2001},
    {title : "book three", genre : "history", publish: "1971", edition: 1985},
    {title : "book four", genre : "science", publish: "1985", edition: 1995},
    {title : "book five", genre : "non-fiction", publish: "1995", edition: 2009},
    {title : "book six", genre : "science", publish: "1999", edition: 2015},
    {title : "book seven", genre : "fiction", publish: "1991", edition: 2003},
    {title : "book eight", genre : "history", publish: "2001", edition: 2018},
    {title : "book nine", genre : "science", publish: "2004", edition: 2022},
    {title : "book ten", genre : "fiction", publish: "1996", edition: 2012},
];

// const userBooks = books.filter((bk)=> bk.genre === "fiction")

const userBooks = books.filter((bk)=> bk.publish >= 2000 )
const userBookEdition = books.filter((bk)=> bk.edition >= 2000)

console.log(userBooks);
