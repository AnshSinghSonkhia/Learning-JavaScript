"Hello".charAt(1); // e
"Hello"[1]; // e

/*
Complete the startsWithX function to determine if the first character of the string argument is the lower-case x.
If the first character is x return true. If not, return false.
*/

function startsWithX(string) {
 
    if (string.charAt(0) === "x"){
        return true;
    } else {
        return false;
    }
}
