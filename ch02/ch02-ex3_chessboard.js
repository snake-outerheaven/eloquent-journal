/*
        Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

        Passing this string to console.log should show something like this:

         # # # #
        # # # # 
         # # # #
        # # # # 
         # # # #
        # # # # 
         # # # #
        # # # #
When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

*/

const string1 = " ########\n"
const string2 = "######## \n"
let outpstring = "";

for (let i = 1; i < 9; i++) {
        if (!(i % 2)) // if i % 2 is 0, so its false. (Bethesda logic.)
                outpstring += string2;
        else
                outpstring += string1
}

console.log(outpstring);

console.log('');

// just reduced more the abstraction level, it works but its a bit strange, i should just go for a entire flattened string, while deducting higher dimension
// stuff from a index, but instead i used both 2d and 1d strategies at the same time, which made this odd but yet functional code.

let size = 19;
let line = "";
const piece1 = " #";
const piece2 = '#';
const piece3 = '# ';


for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
                if (!(y % 2) && x == 0) {
                        line += piece1;
                } else if (!(y % 2) && !(x == 0))
                        line += piece2;
                if ((y % 2) && x == 0)
                        line += piece2;
                else if ((y % 2) && !(x == 0))
                        line += piece2;
                else if ((y % 2) && x == size - 1)
                        line += piece3;
        }
        line += '\n';
}
console.log(line);


// the book's hint exposes a way more clean and clever way to solve this exercise,  i will try to translate it to javascript below

let Size = 20;
let Line = "";

for (let row = 0; row < Size; row++) {
        for (let col = 0; col < Size; col++)
                if (!((row + col) % 2))
                        Line += "#";
                else
                        Line += ' ';
        Line += '\n';
}

// Copilot shows a way on how to handling this using just a 1d array and actually looks more like a chessboard.

let size2 = 45;
let board = "";

for (let i = 0; i < Math.pow(size2, 2); i++) {
        const row = Math.floor(i / size2);
        const col = i % size2;

        board += (!((row + col) % 2)) ? " " : "#";

        if (col == size2 - 1)
                board += '\n';
}

console.log(board);


// note to myself: revisit this exercise and redo it later, the core of this exercise is very straight, if rols + cols is even, print " ", if its not, print "#"