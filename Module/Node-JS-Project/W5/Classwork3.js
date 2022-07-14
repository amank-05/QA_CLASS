const sports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];

/**
 * Print values present on even-index
 * 
 * eg: 
 * Football
 * BASKETBALL
 * Rugby
 */
 console.log(sports[0]);
 console.log(sports[2]);
 console.log(sports[4]);
 
 
 for (let counter=0; counter <= sports.length-1; counter+=2) {
    console.log(sports[counter]);
 }

 
/**
  * Q4:
  * Create abbreviation for any word sentence
  * 
  * 'have a great day'   ->  'HAGD'
  * 'YOu lIVe ONlY ONcE' ->  'YLOO'
  * 'yOu neVER WaLK alOne'   ->  'YNWA'
  * 'yOu neVER WaLK alOne in liFe'   ->  'YNWAIL'
 * 'good Morning'   -> 'GM'
  */
 
 //have a good day
 
//res2 = H_uppercase.concat(A_uppercase.concat(G_uppercase.concat(D_uppercase)))
//console.log(`\n${sent1} (abbreviation) -> ${res2}\n`);



const sentence1 = 'have a great day'
let s1array = sentence1.toUpperCase().split(' ');
let abbr = ''
for (let i=0; i <= s1array.length-1 ; i++) {
    abbr = abbr + s1array[i].charAt(0)
}
console.log(`${sentence1} = ${abbr}`);



/**
 * print the array-values in reverse order
 * 
 * eg:
const sports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];
 * 
 * Rugby
 * Baseball
 * BASKETBALL
 * Soccer
 * Football
 * 
 */


let sports_r = sports.reverse();

for (i=0; i<= sports_r.length-1;i++) {
  console.log(`${sports_r[i]}`);
}


















