/*
        As generic blobs of values, objects can be used to build all sorts of data structures. 
        A common data structure is the list (not to be confused with arrays).
        A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on:

        let list = {
                value: 1,
                rest: {
                        value: 2,
                         rest: {
                                 value: 3,
                                 rest: null
                        }
                 }
        };

        The resulting objects form a chain, as shown in the following diagram:

        [1] → [2] → [3] → null

        A nice thing about lists is that they can share parts of their structure. 
        For example, if I create two new values {value: 0, rest: list} and {value: -1, rest: list} (with list referring to the binding defined earlier), they are both independent lists, 
        but they share the structure that makes up their last three elements. 
        
        The original list is also still a valid three-element list.

        Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument. 
        
        Also write a listToArray function that produces an array from a list. 
        
        Add the helper functions prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list, 
        
        and nth, which takes a list and a number and returns the element at the given position in the list (with zero referring to the first element)  or undefined when there is no such element.
*/

// Node constructor.
const Node = number => {
        return { value: number, rest: null };
};


console.log(Node(123));
// {value: 123, rest: null}

const arrayToList = array => {

        if (array.length === 0)
                return null;

        let head = Node(array[0]);
        let current = head;

        for (let i = 1; i < array.length; i++) {
                let newNode = Node(array[i]);
                current.rest = newNode;
                current = current.rest;
        }
        return head;
}

let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let y = [];
console.log(arrayToList(x));
console.log(arrayToList(y));

const prepend = (number, list) => { 
        let newHead = Node(number);
        newHead.rest = list;
        return newHead;
};

let xList = arrayToList(x);
console.dir(xList);
xList = prepend(-1,xList);
console.dir(xList);

// TODO: Create nth function that takes a list and a  number,  create a index with 0,  create a current binding to the list. and do the recursive loop ( while (current !== null) ) until current.value == n. 
// and then return current.value.