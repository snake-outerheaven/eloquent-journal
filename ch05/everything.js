/*
Implement `every` as a function that takes an array and a predicate function as parameters.
Write two versions:
1. One using a loop
2. One using the `some` method
*/

function every(arr, func) {
        for (let element of arr)
                if (!func(element))
                        return false;
        return true;
}

function everySome(arr, func) {
        return !arr.some(element => !func(element))
}

console.log(every([1, 2, 3, 4, 5, 6], n => n * null));
console.log(everySome([1, 2, 3, 4, 5, 6], n => n * 2));

console.log([1, 2, 3, 4, 5, 6, 7].every(x => x + 1))