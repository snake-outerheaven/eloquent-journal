/*
 The standard JavaScript environment provides another data structure called Set.
 Like an instance of Map, a set holds a collection of values.
 Unlike Map, it does not associate other values with those—it just tracks which values are part of the set.
 A value can be part of a set only once—adding it again doesn’t have any effect.

 Write a class called Group (since Set is already taken).
 Like Set, it has add, delete, and has methods. Its constructor creates an empty group,
 add adds a value to the group (but only if it isn’t already a member),
 delete removes its argument from the group (if it was a member),
 and has returns a Boolean value indicating whether its argument is a member of the group.

 Use the === operator, or something equivalent such as indexOf, to determine whether two values are the same.

 Give the class a static from method that takes an iterable object as its argument and creates a
 group that contains all the values produced by iterating over it.

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

}

let group = Group.from([1,2,3,4,5,6,7]);

console.log(group);

group.add(42);

console.log(group.has(42));

console.log(group.has(52));

group.remove(42);

group.add(72);

console.log(group);




// in construction...
