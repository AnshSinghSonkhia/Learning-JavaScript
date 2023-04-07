console.log("add"+"Sum");


// Let's create a function scream which will take in a value n and return a string with the letter "a" repeated that many times.

function scream(n) {
    let str = "";

    for(let i = 0; i<n ; i++){
        str += "a";
    }

    return str;
}

// try Output

scream(5); // "aaaaa"
scream(10); // "aaaaaaaaaa"


// Let's modify our function to return a scream alternating between lower and capital case.

function scream(n) {
    let str = "";

    for(let i = 0; i<n ; i++){

        if(i % 2 === 0){
            str += "a";
        } else {
            str += "A";
        }
    }

    return str;
}
