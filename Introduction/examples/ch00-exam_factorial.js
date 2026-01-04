// book example from chapter 1 that show how a basic factorial function looks like in JS

function factorial(n) {
        if (n == 0)
                return 1;
        else
                return n * factorial(n - 1); // calling factorial(n) * factorial(n - 1) makes the stack go boom.
}

console.log(factorial(69));