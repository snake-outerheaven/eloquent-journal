/*
The == operator compares objects by identity, but sometimes you’d prefer to compare the values of their actual properties.

Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, 
where the values of the properties are equal when compared with a recursive call to deepEqual.

To find out whether values should be compared directly (using the === operator for that) or have their properties compared, 
you can use the typeof operator. If it produces "object" for both values, you should do a deep comparison. 
But you have to take one silly exception into account: because of a historical accident, typeof null also produces "object".

The Object.keys function will be useful when you need to go over the properties of objects to compare them.
*/
import { arrayToList } from './list.js';

const deepEqual = (obj1, obj2) => {

        if (obj1 === obj2)
                return true;

        if (obj1 == null || obj2 == null || typeof obj1 !== "object" || typeof obj2 !== "object")
                return false;

        let keys1 = Object.keys(obj1);
        let keys2 = Object.keys(obj2);

        if (keys1.length !== keys2.length)
                return false;

        for (let key of keys1)
                if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key]))
                        return false;

        return true;

};

let list1 = arrayToList([1, 2, 3, 4, 5]);
let list2 = arrayToList([1, 2, 3, 4, 5]);

console.table(JSON.stringify(list1));
console.table(JSON.stringify(list2));

console.log(deepEqual(list1, list2));