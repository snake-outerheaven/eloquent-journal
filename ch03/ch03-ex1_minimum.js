/*
        The previous chapter introduced the standard function Math.min that returns its smallest argument. 
        We can write a function like that ourselves now. 
        Define the function min that takes two arguments and returns their minimum.
*/

let min = (x, y) => {
        return (x < y) ? x : y;
};

console.log(min(10, 20) + ' ' + min(23, 44));