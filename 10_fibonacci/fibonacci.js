const fibonacci = function(n) {
    let a = 1;
    let b = 1;
    let temp;

    if (n < 0) return 'OOPS';

    if (n == 1 || n == 2) return a;

    for (let i = 2; i < +n; i++) {
        temp = b;
        b = a + b;
        a = temp;
    }
    
    return b;
};

// Do not edit below this line
module.exports = fibonacci;

/* pseudocode

n = input

create a variable called a of type number that starts with 1
create a variable called b of type number that starts with 1

if n is equal to 1 or 2 then return a

begin with i at 2 and add 1 to i on each pass until i is larger or equal to n
    create a variable called temp of type number that stores b
    add a with b and store that at b
    change a to temp

return b


*/