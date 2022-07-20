/***
 * 
 * Create a for-each loop for addition of this array
 * [1, 2, 3, 4, 5]
 */
let array = [1, 2, 3, 4, 5]
/**
 
let total = 0
array.forEach( => {
    total += array[a]
});

console.log(total);
*/


array.forEach(element => {
    
});


function total(array) { {
    for (let a=0; a < length.array; a++)
    total += array[a]
}
return total
}

console.log(total[1,2,3]);



/**
 * forEach
 * 
 * --> works works with Array and function
 * 
 * 
 * arrayName.forEach(function (varName) {
 *      code in function of forEach loop
 * })
 * 
 * 
 * picks index-0-value and assign to a variable
 * picks index-1-value and assign to a variable
 * picks index-2-value and assign to a variable
 * ...
 * ... 
 * picks index-last-value and assign to a variable
 * 
 * 
 */


 console.log('\n\nUsing forEach loop with Array\n\n')
 const favSports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];
 
 for (let counter = 0 ;  counter <= favSports.length-1 ; counter++) {
     console.log(favSports[counter]);
 }
 /*
     inside for loop, we write bunch of code lines
 */
 
 for (const sName of favSports) {
     console.log(sName);
 }
 /*
     inside for-of loop, we write bunch of code lines
 */
 
 favSports.forEach(function (sport) {
     console.log(sport);
 })
 /*
     inside forEach loop, we write function and function contains bunch of code lines
 */
 
