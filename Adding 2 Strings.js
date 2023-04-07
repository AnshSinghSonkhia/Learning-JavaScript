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
