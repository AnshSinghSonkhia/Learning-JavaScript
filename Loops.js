// SUMMATION

function summation(n) {
    let sum = 0;

    for (let i = 1 ; i<=n ; i++) {
        sum += i
    }

    return sum;
}


// Factorial

function factorial(n) {
    let fact = 1;

    for (let i = 1 ; i <= n ; i++){
        fact = fact * i
    }

    return fact;
}


// WHILE Loop Syntax

while(baa > 5) {
    // do something
}


// While Loop using BREAK Statement

while(true) {
    if(aaa > 2) {
        // exit the loop
        break;
    }
}


// determine the largest double of value 
// that is less than the top 

function topDouble(value, top) {
    while(value < top) {
        value = value * 2;
    }
    return value / 2;
}
