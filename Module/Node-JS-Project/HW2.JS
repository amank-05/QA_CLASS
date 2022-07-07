const sentence1 = 'Hello dear, how are you doing?';
let result1 = 0;
/**
 * if the length of sentence1 is greater than or equals to 10
 *      assign 15 in result1
 * otherwise
 *      assign 25 in result1
 */
let sentance1Length = sentence1.length;
console.log(`\nsentance1Length -> ${sentance1Length}`);
result1 = sentance1Length >= 10 ? 15 : 25
console.log(`result1 -> ${result1}`);


const sentence2 = 'HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.';
/**
 * replace all instances of a/A with 'Alpha', print the result in console
 */
let result2 = sentence2.replace(/a/gi, 'Alpha');
console.log(`\nsentance2_replaced -> ${result2}`);

const sentence3 = "HeAlTh wAs EArlIer said To Be the AbILitY of the bOdY funcTiOnInG WElL.";
/**
 * print the result in console:
 * 1. the length of sentence-3  X
 * 2. does sentence-3 starts with 'health' (ignore cases)
 * 3. does sentence-3 contains with 'Body' (ignore cases)
 * 4. index of 'Body' in sentence3  (ignore cases)
 * 5. the last-character in sentence-3
 * 6. word 'Body' is present only once. (true or false)
 */

let sentence3Length = sentence3.length
console.log(`\nsentence3Length-> ${sentence3Length}`);

//does sentence-3 starts with 'health' (ignore cases)
let pattern1 = 'health'
let sentence3L = sentence3.toLowerCase();
let sentence3LStartsWith = sentence3L.startsWith(pattern1)
console.log(`\nSentence 3 starts with 'health' -> ${sentence3LStartsWith}`);

//does sentence-3 contains with 'Body' (ignore cases)
let pattern2= 'Body'
let pattern2L = pattern2.toLowerCase();
let sentence3ContainBody = sentence3L.includes(pattern2L)
console.log(`\nSentence 3 contains 'Body' -> ${sentence3ContainBody}`);

//index of 'Body' in sentence3  (ignore cases)
let sentence3BodyIndex = sentence3L.indexOf('body')
console.log(`\nBody is at index number -> ${sentence3BodyIndex}`);

//the last-character in sentence-3
//sentence 3 length = 71. last index = length -1 = 71 - 1 = 70
let sentence3LastChar = sentence3.charAt(70);
console.log(`\nThe last character in sentence 3 is '${sentence3LastChar}'`);

//word 'Body' is present only once. (true or false)
let sentence3BodyOccurence = sentence3L.includes(pattern2L)<2
console.log(`\nThe word Body occurs only once ${sentence3BodyOccurence}`);