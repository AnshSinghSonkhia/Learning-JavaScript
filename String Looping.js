/*
Complete the function isAllX to determine if the entire string is made of lower-case x, upper-case X, or a mix of both. Return true if they are, false if not.
*/

function isAllX(string) {
    for(let i = 0; i < string.length; i++ ){
        if (string[i].toLowerCase() !== "x"){
            return false;
        }
    }
    return true;
}
