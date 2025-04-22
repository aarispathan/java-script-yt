// ==== Immediately Invoked Function Expressions (IIFE)  ==== //


// named iife
(function one () {
    console.log(`DATA BASE CONNNECTED`);
})();

//unnamed  iife
((name) => {
    console.log(`db is connected ${name}`);
})('ak');
