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

let size = 8;
let p1 = ' ';
let p2 = '#';
let chessboard = '';

for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
                chessboard += !((row + col) % 2) ? p1 : p2;
                if (col == size - 1)
                        chessboard += '\n';
        }
}
console.log(chessboard);



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

console.log(Line);

// Copilot shows a way on how to handling this using just a 1d array

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