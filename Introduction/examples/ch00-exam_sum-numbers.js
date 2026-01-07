/*
  * Exercise that introduces the first snippet of code from Eloquent JavaScript
  * 
  * This exercise show the sum of all the numbers in the range 0 to 11 (1+2+3...+8+9+10)
  */

let count = 1, total = 0;

while (count <= 10) {
  total += count;
  count++;
}
console.log(total);