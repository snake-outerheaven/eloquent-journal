/*
        The sum of a range
        
        The introduction of this book alluded to the following as a nice way to compute the sum of a range of numbers:

                console.log(sum(range(1, 10)));
        
        Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to and including end.

        Next, write a sum function that takes an array of numbers and returns the sum of these numbers. 
        
        Run the example program and see whether it does indeed return 55.

        As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. 
        
        If no step is given, the elements should go up by increments of one, corresponding to the old behavior. 
        
        The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. 
        
        Make sure this also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].

*/

// TODO:  As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. 

const range = (start, end) => {
        let returnArray = [];
        start = Number(start);
        end = Number(end);

        if (end - start > 0) {
                for (let i = start; i <= end; i++)
                        returnArray.push(i);
                return returnArray;
        }
        if (end - start < 0) {
                for (let i = start; i >= end; i--)
                        returnArray.push(i)
                return returnArray;
        }
        if (end - start == 0)
                return null;

        return undefined;
};

const sum = array => {
        let sum = 0;

        if (array.length == 0)
                return 0;

        if (array.length > 0)
                for (let i = 0; i < array.length; i++)
                        sum += array[i];

        return sum;
};

let range1 = range(1, 10), range2 = range(-1, -10);

console.table(range1);
console.table(range2);

console.log(sum(range1), sum(range2));