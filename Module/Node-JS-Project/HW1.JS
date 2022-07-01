/**
 * Convert temperature values into different units
 * 
 * F -> C
 * F -> K
 * 
 * C -> F
 * C -> K
 * 
 * K -> F
 * K -> C
 * 
 * Refer link for formula:
 * https://www.rapidtables.com/convert/temperature/fahrenheit-to-celsius.html
 * 
 * 
 * Due Date: Jul-3 EOD
 * 
 */


// F -> C
// T(°C) = (T(°F) - 32) × 5/9
let fTemp1 = 90;
let cTemp1 = (fTemp1 - 32) * 5/9;
console.log(`\n${fTemp1}°F equals to ${cTemp1}°C`);

//F -> K
//T(K) = (T(°F) + 459.67) x 5/9
let kTemp1 = (fTemp1+459.67) * 5/9;
console.log (`\n${fTemp1}°F equals to ${kTemp1}K`)

//C -> F  *F = 1.8 C + 32
let cTemp2 = 32
let fTemp2 = (1.8 * cTemp1) + 32
console.log (`\n${cTemp2}°C equals to ${fTemp2}°F`)

//C -> K   *T (K) = T (°C) + 273.15
let kTemp2 = cTemp2 + 273.15
console.log(`\n${cTemp2}°C equals to ${kTemp2}K`)

//K -> F    *F = 9/5(K - 273) + 32
let kTemp3 = 305.4
let fTemp3 = 9/5 * (kTemp3 - 273) +32
console.log (`\n${kTemp3}K equals to ${fTemp3}°F`)

//K -> C    *C = K − 273.15
let cTemp3 = kTemp3 - 273.15
console.log(`\n${kTemp3}K equals to ${cTemp3}°C\n`)