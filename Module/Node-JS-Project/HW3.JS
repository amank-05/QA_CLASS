/**
 * Q1:
 * Print the length of the country name (without using String-length property)
 * 
 */
 let countryName = 'South Korea'; //11
 /*use split('') -> splits each character including spaces
 *console log
 *find length of array
*/
let country1 = countryName.split('');
res3 = country1.length
console.log(`\n${res3}`);

 /**
  * Q2:
  * Count the number of words in the sentence
  */
 const sentence = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
 /*use split(' ') -> splits the word
 *find length of array -> X
*/
let sent_1 = sentence.split(' ')
res4 = sent_1.length
console.log(`\n${res4}`);

 /**
  * Q3:
  * Convert any 4-word sentence into Titlecase
  * 
  * 
  * 'have a great day'   ->  'Have A Great Day'
  * 'YOu lIVe ONlY ONcE' ->  'You Live Only Once'
  * 
  */
 
let sent1 = 'have a great day'

let H_uppercase = sent1.substring(0,1).toUpperCase();
let have = sent1.substring(1,4);
let word_have = H_uppercase.concat(have.padEnd(4,' '));


let A_uppercase = sent1.substring(5,6).toUpperCase();
let A_withSpaces = A_uppercase.padEnd(2, ' ');

let G_uppercase = sent1.substring(7,8).toUpperCase();
let great = sent1.substring(8,12);
let word_great = G_uppercase.concat(great.padEnd(5,' '));

let D_uppercase = sent1.substring(13,14).toUpperCase(); 
let day = sent1.substring(14);
let word_day = D_uppercase.concat(day);

res1 = word_have.concat(A_withSpaces.concat(word_great.concat(word_day)))
console.log(`\nConverted '${sent1}' -> ${res1}`)


 /**
  * Q4:
  * Create abbreviation for any 4-word sentence
  * 
  * 'have a great day'   ->  'HAGD'
  * 'YOu lIVe ONlY ONcE' ->  'YLOO'
  * 'yOu neVER WaLK alOne'   ->  'YNWA'
  * 
  */
 
 //have a good day
 
 res2 = H_uppercase.concat(A_uppercase.concat(G_uppercase.concat(D_uppercase)))
console.log(`\n${sent1} (abbreviation) -> ${res2}\n`);