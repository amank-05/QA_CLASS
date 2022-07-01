let num1=10;
let num2=20;
let num3=30;
let num4=40;

let res3 = num1 + num2++;
console.log(`num1=${num1}`);
console.log(`num2=${num2}`);
console.log(`res1=${res3}\n`);


let res4 = num1++ - ++num2
console.log(`num1=${num1}`);
console.log(`num2=${num2}`);
console.log(`res2=${res4}\n`);



/**
 * 1. Create a variable name teamSize and assign your team size value to that variable
 * 2. Post Increment your teamSize by 1.
 * 3. Create new variable name teamName and assign your team name to it. 
 * 4. Construct a string which should display below text
 * 
 *  Our Team name is ABC and our team size is N.
 */


let teamSize = 5
teamSize++
let teamName = 'Alpha'
console.log(`Our Team name is ${teamName} and our team size is ${teamSize}\n`)


num1 = 10
let num5 = num1++; //  (assignment, post-increment)
console.log(`num1 = ${num1}`);      // num1 = 11
console.log(`num5 = ${num5}`);      // num5 = 10

num1 = 10
let num6 = ++num1; //  (pre-increment, assignment)
console.log(`num1 = ${num1}`);      // num1 = 11
console.log(`num5 = ${num5}`);      // num5 = 11

let lVar1=10;
let lVar2=20;
let lVar3=30;
let lVar4=40;

let res1 = lVar1 + lVar2++; // (addition, assignment, post-increment)
console.log(`\n\nlVar1 = ${lVar1}`);    // 10
console.log(`lVar2 = ${lVar2}`);        // 21
console.log(`res1 = ${res1}`);          // 30

// let abc = 2 + 1;

// let x = 2-4+1*3;    // mult, add, sub, assignment

// lVar1=10 , lVar2=21
let res2 = lVar1++ - ++lVar2;   // (pre-increment, subtraction, assignment, post-increment)
    /* 
        lVar2 = 22
        lVar1 - lVar2 (-12)
        res2 = -12
        lVar1 = 11
    */
console.log(`\n\nlVar1 = ${lVar1}`);        // 11
console.log(`lVar2 = ${lVar2}`);            // 22
console.log(`res2 = ${res2}`);              // -12

