/*
        Arrays have a reverse method that changes the array by inverting the order in which its elements appear. 
        
        For this exercise, write two functions, reverseArray and reverseArrayInPlace. 
        
        The first, reverseArray, should take an array as its argument and produce a new array that has the same elements in the inverse order. 
        
        The second, reverseArrayInPlace, should do what the reverse method does: modify the array given as its argument by reversing its elements. 
        
        Neither may use the standard reverse method.
*/

const reverseArray = array => {

        let returnArray = [];

        for (let i = array.length - 1; i >= 0; i--)
                returnArray.push(array[i]);

        return returnArray

};

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let array2 = reverseArray(array);

console.table(array2);

const reverseArrayInPlace = array => {
        for (let i = 0; i < Math.floor(array.length / 2); i++) {
                let temp = array[i];
                let mirror = array.length - i - 1;
                array[i] = array[mirror];
                array[mirror] = temp;
        }
        return array;
};

let array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.table(reverseArrayInPlace(array3));