// Due date: Thu (July 21) eod

/**
 * Q1:
 * Create a function to convert any sentence into Titlecase
 * 
 * 'have a great day'   ->  'Have A Great Day'
 * 'YOu lIVe ONlY ONcE' ->  'You Live Only Once'
 * 'gooD mORNIng' -> 'Good Morning'
 * 'apple banana cherry' -> 'Apple Banana Cherry'
 * 
 */


function toAbbreviate(sentence) {
    let word = ''
    let s1L_word = sentence.toLowerCase().split(' ');
    for (a=0; a<= s1L_word.length-1; a++)  // at index 0; 0<=3; 0++
  {
    word = word + s1L_word[a].charAt(0).toUpperCase()+ s1L_word[a].substring(1)+' '
}          
return word
}


console.log(`\nUsing Function to create title case sentences -> ${toAbbreviate('dOGs ARE MAns BeST friEND')}\n`);

/**
 * Q2:
 * Create a function to reverse a String (word by word)
 * 
 * 'have a great day'   ->  'day great a have'
 * 'good morning'   -> 'morning good'
 * 'hello dear how are you doing' -> doing you are how dear hello'
 * 'Learn' -> 'Learn'
 * 
 */
 function toReverse(sentence) {
    let word = ''
    let s1L_word = sentence.toLowerCase().split(' ').reverse();
    for (a=0; a<= s1L_word.length-1; a++)  // at index 0; 0<=3; 0++
  {
    word = word + s1L_word[a].charAt(0).toUpperCase()+ s1L_word[a].substring(1)+' '
}          
return word
}
console.log(`Creating a function to reverse a sentence -> ${toReverse('ArE You DoINg OK ?')}\n`);


/**
 * 
 * Q3:
 * Create a function to find the total of numbers in the array
 * 
 * [1, 2, 3, 4, 5] -> 15
 * [1, 1, 1, 2, 3, 1, 2] -> 11
 * [1, -1] -> 0
 * 
 * arrayName.forEach(function (varName) {
 *      code in function of forEach loop
 * })
 */

/** 
function arrayTotal(array) {
    let arrayTotal = 0;
    for (let a=0 ; a < array.length ; a++)   {   
        arrayTotal += array[a]                            
}
return arrayTotal
}
*/

/** 
I want my total to run until the last # of the array
total = num1 + num2 + ...num x
my counter < array.length or <=array.length-1
increament = counter++
*/

function toSum(array) {
    let total = 0
    for (let a=0 ; a < array.length ; a++)   {    // starts a=0; 1<5; 0++
        total += array[a]    
}
return total
}
let arr1 = [2,4,6,8,-50]
console.log(`Sum of ${arr1} using toSum function -> ${toSum(arr1)}\n`);



/**
 * Q4:
 * Create a function to find the average of the given array:
 * 
 * avg = totalOfValues/numberOfValues
 * 
 * [1, 2, 3, 4, 5] -> 15/5 -> 3
 * [1, 1, 1, 2, 3, 1, 2] -> 11/7 -> 1.xx
 * [1, -1] -> 0/2 -> 0
 */

 function toAverage(array) {
    let total = 0
    for (let a=0 ; a < array.length ; a++)   {    // starts a=0; 1<5; 0++
        total += array[a]    
}   
let average = total/array.length
return average
}
let random = [2,1,4,3]
console.log(`Average of ${random} using toAverage function -> ${toAverage(random)}\n`);