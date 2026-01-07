/*
        Write a loop that makes seven calls to console.log to output the following triangle:

        #
        ##
        ###
        ####
        #####
        ######
        #######
*/

let holder = '#'
for (let i = 0; i < 7; i++) {
        console.log(holder);
        holder += '#';
}

console.log('');

// a more elegant solution is shown in the hints of this exercise, i will reproduce it

for (let hold = '#'; hold.length <= 7; hold += '#')
        console.log(hold);