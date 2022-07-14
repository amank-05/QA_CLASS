// Due date: Mon (July 18) eod

/**
 * Q1:
 * Convert any sentence into Titlecase
 * 
 * 'have a great day'   ->  'Have A Great Day'
 * 'YOu lIVe ONlY ONcE' ->  'You Live Only Once'
 * 'gooD mORNIng' -> 'Good Morning'
 * 'apple banana cherry' -> 'Apple Banana Cherry'
 * 
 */
const sentence1 = 'YOu lIVe ONlY ONcE'
let s1L = sentence1.toLowerCase();
let b = s1L.split(' ')
let word = ''
/** 
for (let counter=0; counter <= sports.length-1; counter+=2) {
    console.log(sports[counter]);
 }
 * a=index = 0,1,2,3        b=splits by word
 * have, a , great, day
 * H A G D
 * substring must go to infinity # of alphabets = no end to the substring
 * 
*/

for (a=0; a<= b.length-1; a++)  // at index 0; 0<=3; 0++
  {
    word = word + b[a].charAt(0).toUpperCase()+ b[a].substring(1)+' '
}           
console.log(`${word}`);


//charAt(0).toUppercase()


/**
 * Q2:
 * Reverse a String (word by word)
 * 
 * 'have a great day'   ->  'day great a have'
 * 'good morning'   -> 'morning good'
 * 'hello dear how are you doing' -> doing you are how dear hello'
 * 'Learn' -> 'Learn'
 * 
 */

/**
 * c = b(reverse) = day great a have
 */


let c = b.reverse();
let w1 = ''
for (a=0; a <= c.length-1; a++)  {
    w1 = w1 + c[a].substring(0)+' '
}

console.log(`${w1}`);

/**
 * Q3:
 * Find the total of numbers in the array
 * 
 * [1, 2, 3, 4, 5] -> 15
 * [1, 1, 1, 2, 3, 1, 2] -> 11
 * [1, -1] -> 0
 */

var d = [1, 2, 3, 4, 5];     
var total = 0;
for (let a=0 ; a < d.length ; a++)   {    // starts a=0; 1<5; 0++
    total += d[a]                           // 5<5  
}
console.log(total);


/**
 * 
 * Q4:
 * Find the average of the given array:
 * 
 * avg = totalOfValues/numberOfValues
 * 
 * [1, 2, 3, 4, 5] -> 15/5 -> 3
 * [1, 1, 1, 2, 3, 1, 2] -> 11/7 -> 1.xx
 * [1, -1] -> 0/2 -> 0
 */

var e = [1, -1]
var total1 = 0

for (let a=0; a < e.length; a++) {
    total1 += e[a]
}
console.log((total1/(e.length)));