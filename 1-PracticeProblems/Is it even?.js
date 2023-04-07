// Given an integer value num, determine if it is even.
// If it is even, return true. Return false otherwise.

function isEven(num) {
    let goal = true;

    if(num % 2 === 0) {
        goal = true;
    } else {
        goal = false;
    } 

    return goal;
}
