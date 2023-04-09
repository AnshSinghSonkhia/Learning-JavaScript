"An apple".slice(0,2); // An
"The 40 Thieves".slice(4,8); // 40 T

"Please Slice Me".slice(7); // Slice Me

/*
Let's find the longer half of the string before and after the x!

First, you'll need to find the lower-case x.
Once you've found the x, split the string in half. The first half will be the string before the x, the second half will be the string after the x.
Take the longer string and return it!
*/

// split the string at the first occurrence of x
// return the larger of the two resulting strings
// i.e. HappyxDeveloper => Developer
function splitAtX(string) {
    const index = string.indexOf('x');
    const a = string.slice(0,index);
    const b = string.slice(index+1);
    return (a.length > b.length) ? a : b;
}
