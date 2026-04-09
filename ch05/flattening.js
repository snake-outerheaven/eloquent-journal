/*
        Flattening
        Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.
*/

let arrayOfArrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];


let array = arrayOfArrays.reduce((accum, current) => { return accum.concat(current) }, [])

console.table(array);


let arrayNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let sum = arrayNums.reduce((sum, current) => { return sum + current }, 0);

console.log(sum);

let arrayProperties = [["name", "snake"], ["afiliation", "msf"]];

let snake = arrayProperties.reduce((obj, current) => { obj[current[0]] = current[1]; return obj; }, {});

console.log(snake);

// Mozzila's documentation for reduce is here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce <- please read this!!