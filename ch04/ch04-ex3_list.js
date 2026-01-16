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

        If you haven’t already, also write a recursive version of nth.

*/

// Node constructor.
const Node = number => {
        return { value: number, rest: null };
};

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

const listToArray = list => {
        let array = [];
        let current = list;

        while (current != null) {
                array.push(current.value)
                current = current.rest;
        }

        return array;
};

const prepend = (number, list) => {
        let newHead = Node(number);
        newHead.rest = list;
        return newHead;
};

const append = (number, list) => {
        let newTail = Node(number);
        let current = list;

        while (current.rest != null)
                current = current.rest;

        current.rest = newTail;
};

const nth = (n, list) => {
        let index = 0;
        let current = list;

        while (current !== null) {
                if (n === index)
                        return current.value;
                current = current.rest;
                index++
        }
        return undefined;
};

const recursiveNth = (n, list) => {
        if (list === null)
                return undefined;
        if (n === 0)
                return list.value;
        return recursiveNth(n - 1, list.rest);
};

const freeList = list => {
        let current = list;

        while (current != null) {
                let temp = current.rest;
                current.rest = null;
                current = temp;
        }
};