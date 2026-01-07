/*
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), 
print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 
(and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0)
                console.log("fizz");
        else if (!(i % 5))
                console.log("buzz");
        else
                console.log(i);
}

console.log("");

// this would be the simpler solution for printing fizzbuzz, and one of my failure points, as i didnt have the knowledge to tackle the overlapping

for (let i = 1; i <= 100; i++) {
        if (i % 15 == 0) // 15 is equal to 5 * 3 -> 5 AND 3 logically, by LCM <- learned this after failing this part of the exercise.
                console.log('fizzbuzz');
        else if (i % 3 == 0)
                console.log('fizz');
        else if (i % 5 == 0)
                console.log('buzz');
        else
                console.log(i);
}

console.log("");

// the clever way the exercise the author exposes is shown by the following piece of code: 

for (let i = 1; i < 101; i++) {
        let output = "";
        if (i % 3 == 0)
                output += "fizz";
        if (i % 5 == 0)
                output += "buzz";
        console.log(output || i);
}

/*
        Notes to myself:

        1º -> Analyzing the overlap condition first was key on doing this exercise, but unfortunately i missed the entire point of this, 
                i must study more about logic and math. 

        2º -> this exercise shows two patterns of solving the same issue: overlap  reasoning, where you attack the specific overlaps before delving to the
                general cases, and the accumulator pattern, where input already implies a output exist, so you just need to reason about it and accumulate 
                wanted outputs to a void already existant output, much like a assembly line.
*/