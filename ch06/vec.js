/*
  Write a class Vec that represents a vector in two-dimensional space. 
  It takes x and y parameters (numbers), that it saves to properties of the same name.

  Give the Vec prototype two methods, plus and minus, that take another vector 
  as a parameter and return a new vector that has the sum or difference of the two vectors’ 
  (this and the parameter) x and y values.

  Add a getter property length to the prototype that computes the length of the vector—
  that is, the distance of the point (x, y) from the origin (0, 0).
*/


class Vec {
    #x;
    #y;

    constructor(x, y) {
        if (typeof x !== "number" || typeof y !== "number") {
            throw new TypeError("x and y must be numbers");
        }
        this.#x = x;
        this.#y = y;
    }

    get x() {
        return this.#x;
    }

    set x(value) {
        if (typeof value !== "number") {
            throw new TypeError("x must be a number");
        }
        this.#x = value;
    }

    get y() {
        return this.#y;
    }

    set y(value) {
        if (typeof value !== "number") {
            throw new TypeError("y must be a number");
        }
        this.#y = value;
    }

    static isVec(obj) {
        return obj instanceof Vec;
    }

    plus(vec) {
        if (!Vec.isVec(vec)) {
            throw new TypeError("Argument must be a Vec instance");
        }
        return new Vec(this.#x + vec.#x, this.#y + vec.#y);
    }

    minus(vec) {
        if (!Vec.isVec(vec)) {
            throw new TypeError("Argument must be a Vec instance");
        }
        return new Vec(this.#x - vec.#x, this.#y - vec.#y);
    }

    get length() {
        return Math.sqrt(this.#x * this.#x + this.#y * this.#y);
    }
}

let vec1 = new Vec(12, 34);
let vec2 = new Vec(643, 123);

console.log(vec1.x, vec2.y);
console.log(vec2.x, vec2.y);

let vec3 = vec1.minus(vec2);
let vec4 = vec2.plus(vec1);
let vec5 = vec1.plus(vec2);
let vec6 = vec2.minus(vec1);

console.log(vec3.x, vec3.y);
console.log(vec4.x, vec4.y);
console.log(vec5.x, vec5.y);
console.log(vec6.x, vec6.y);
