/*
    if name is happy, print "good name"
    if name is joy, print the name and it's length.
                    print "your name is too short"
    if name is john, print name in uppercase
    if name is not from above list, print "you have a different name than we expected"
*/
var myName = 'john'
switch (myName) {
    case myName = 'happy': 
            console.log(`good name`);
        break;
    case myName = 'joy': 
            console.log(`Name = ${myName} and its length is ${myName.length} 'your name is too short'`);
        break;
    case myName = 'john': 
            console.log(`${myName.toUpperCase()}`);
    break;
    default: 
            console.log(`you have a different name than we expected`);
        break;
}



/*
    day
    if day is Mon, monday -> print ("Today is the Technosoft class")
    if day is tue -> print ("Today is self learning day")
    if day is Wed -> print ("Today is the Technosoft class")    
    if day is Thu -> print ("Today is self learning day")
    if day is Fri -> print ("Today is the Technosoft class")
    if day is Sat -> print ("Today is lab session day")
    if day is sun -> print ("No study today")
    Note: if day value is not valid -> print an error saying "Entered day-value is not valid"
    
    User can provide day-name is any form, Mon or MOn or MON or MoN or monday or MonDAy or MONDAY
 */


// make all monday values equal.

let day = 'MONDAY'
let myDay = day.toLowerCase()

switch (myDay) {
    case 'mon':
    case 'monday':
    case 'wed': 
    case 'wednesday':
    case 'fri':
    case 'friday':
                console.log(`Today is the Technosoft class`);
        break;
    case 'tues':
    case 'tuesday':
    case 'thur':
    case 'thursday':    
                console.log(`Today is the Technosoft class`);
        break;
    case 'sat':
    case 'saturday':
                console.log(`Today is lab session day`);
        break;
    case 'sun':
    case 'sunday':
            console.log(`No study today`);
    break;
    default:
                console.log(`Entered day-value is not valid`);
        break;
}











