/*
        We’ve seen that we can use % (the remainder operator) to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. 
        
        Here’s another way to define whether a positive whole number is even or odd:

        Zero is even.

        One is odd.

        For any other number N, its evenness is the same as N - 2.

        Define a recursive function isEven corresponding to this description. 
        
        The function should accept a single parameter (a positive, whole number) and return a Boolean.

        Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
*/

// my first solution
let isEven = x => {
        if (x == 0)
                return true;
        if (x == 1)
                return false;
        if (x > 0)
                return isEven(x - 2);
        if (x < 0)
                return isEven(x + 2);
};

// second solution after checking the code with Copilot,  it seems studying the Math object is a good call for writing less code. 
let isEven2 = x => {
        x = Math.abs(x);
        if (x == 0)
                return true;
        if (x == 1)
                return false;
        return isEven2(x - 2);
};

console.log(isEven(3044), isEven(-2044), isEven(-1),isEven2(-1),isEven2(-5043),isEven2(7777));