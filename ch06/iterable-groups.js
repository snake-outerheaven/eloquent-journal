/*
## Making the Group Class Iterable

To make the `Group` class iterable according to the JavaScript iterator
interface, we must implement a method keyed with the `Symbol.iterator`
well-known symbol. This method acts as a factory for an **iterator object**.

### 1. The Iterator Interface
The iterator object must follow a specific contract:
* It must have a **next()** method.
* This method returns an object with two properties:
    * **value**: The current element in the sequence.
    * **done**: A boolean indicating if the sequence is finished (`true` when
        there are no more elements).

### 2. Implementation Strategy
Instead of returning the array's built-in iterator, we define a custom
class (e.g., `GroupIterator`). This class needs to track the current
**state** of the iteration, which typically involves:
* A reference to the **Group instance** being iterated.
* An **index** variable that starts at 0 and increments with each call
    to `next()`.

### 3. The Iteration Logic
Inside the `next()` method:
* Check if the index is less than the current length of the group's members.
* If **true**: Return the element at the current index and increment the index.
* If **false**: Return an object where `done` is `true`.

### 4. Integration
Finally, the `Group.prototype[Symbol.iterator]` method is defined to return
a new instance of our custom `GroupIterator`. This allows the `Group`
class to be used directly in `for...of` loops and spread operations.
*/


class Group {

	// attrs

	group;

	// methods

	constructor() {
		this.group = [];
	}

	has(value) {
		return this.group.includes(value);
	}

	add(value) {
		if(!this.has(value))
			this.group.push(value);
	}

	remove(value) {
		this.group = this.group.filter(v => v !== value);
	}

	static from(iterable) {
		let group = new Group();

		for(let item of iterable)
			group.add(item);

		return group;
	}

    [Symbol.iterator]() {
        return new GroupIterator(this);
    }
}

class GroupIterator {

    group;
    index;


    constructor(group) {
        this.group = group;
        this.index = 0;
    }

    next() {

        if(this.index >= this.group.group.length)
            return { done: true };

        let result = this.group.group[this.index++];

        return { value: result, done: false };
    }
}


let group = Group.from([1, 2, 3, 4, 5, 6, 7, 8]);

for(let element of group)
    console.log(element);

