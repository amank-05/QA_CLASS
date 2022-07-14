// Due date: Fri (Jul 15) eod

/**
 * create two variables, one is to store studentScore, and another one to store maxScore
 * based on the student percentage, print the grade.
 * 
 * Grade-A : 91-100% 
 * Grade-B : 81-90.99% 
 * Grade-c : 71-80.99%
 * Grade-D : 61-70.99%
 * Grade-E : 51-60.99%
 * Grade-F : less than 51%
 * 
 * if the studentScore is invalid or more than maxScore, print "Invalid student score"
 * 
 * studentScore = 40
 * maxScore = 50
 * 
 * Grade -> C
 */


let studentScore = 43.1453
let maxScore = 50
let studentTotal = (studentScore/maxScore) * 100
//must use if-else 


if ((studentTotal>=91) && (studentTotal<=100)) {    //provide a range using the && and >=/<= operator
    console.log(`Grade-A`);
}else if ((studentTotal>=81) && (studentTotal<=90.99)) {
    console.log(`Grade-B`); 
}else if ((studentTotal>=71) && (studentTotal<=80.99)) {
    console.log(`Grade-C`); 
}else if ((studentTotal>=61) && (studentTotal<=70.99)) {
    console.log(`Grade-D`); 
}else if ((studentTotal>=51) && (studentTotal<=60.99)) {
    console.log(`Grade-E`); 
}else if ((studentTotal>=0) && (studentTotal<=50.99)) {
    console.log(`Grade-F`); 
}else {
    console.log(`Invalid student score`);
}




/**
 * Create a variable and store any value in it.
 * if the myNumber is divisible by 5, print "divisible by 5"
 * if the myNumber is divisible by 3, print "divisible by 3"
 * if the myNumber is divisible by 5 and by 3, print "divisible by 5 and 3"
 * if the myNumber is NOT divisible by 5 and by 3, print the value in myNumber
 *
 * 
 * myNumber = 19
 * 
 * 
 */
 

//if my number is divisible by 5 or 3, the Modulus must be 0

let num = 18

if ((num%5===0) && (num%3===0)) {
    console.log(`divisible by 5 and 3`);
} else if ((num%5===0)) {
     console.log(`divisible by 5`);
} else if ((num%3===0)) {
    console.log(`divisible by 3`);
} else {
    console.log(`${num}`);
}

/**
 * let planets = ['Earth', 'Mercury', 'Jupiter', 'Saturn', 'Mars', "Venus", 'Pluto'];
 * 
 * if Earth is mentioned as first name in the array, print "Earth is mentioned in expected index"   // first name = earth = true. Index = 0
 * otherwise add Earth as first name in the array, then print the entire array.     //first name != earth. new array = Earth @ 0
 * 
 */
let planets = ['Earth', 'Mercury', 'Jupiter', 'Saturn', 'Mars', 'Venus', 'Pluto'];
let a = planets.toString()

if (a.startsWith('Earth')) {
    console.log(`Earth is present at index ${planets.indexOf('Earth')}`);
} else {
    planets.unshift('Earth')
    console.log(`${planets}`);
}



/**
 * const sports = ['Football', 'Soccer', 'BASKETBALL', 'Baseball', 'Rugby'];
 * 
 * if BASKETBALL is not present at index-2 but present at any other index, print "BASKETBALL is mentioned in the sports array"  //print if sports includes basketball 
 * if BASKETBALL is present in index-2, print "BASKETBALL is present at index-2"            //print index 2
 * if BASKETBALL is NOT present in the array, replace index-2 value with BASKETBALL and print the value which you replaced.  // if basketball != sports array. replace index 2 value and print
 * 
 * basketball !== index 2 
 */

const sports = ['Football', 'Soccer','BASKETBALL','Baseball', 'Rugby'];
let b = sports[2].toUpperCase();

if ((sports[2] !== 'BASKETBALL') && (sports.includes(b)))  {
    console.log(`BASKETBALL is mentioned in the sports array`);
} else if (sports.includes('BASKETBALL',2)) {                // sports.includes('BASKETBALL',2)
    console.log(`BASKETBALL is present at index-2`);
} else {
    sports.splice(2,1,'Basketball')
    console.log(`${sports}`);
}



