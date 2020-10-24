// Iteration 1: Names and Input

// 1.1 Create a variable `hacker1` with the driver's name.
let hacker1 = 'Tom';

// 1.2 Print `"The driver's name is XXXX"`.
console.log(`"The driver's name is ${hacker1}"`);

// 1.3 Create a variable `hacker2` with the navigator's name.
let hacker2 = 'Pat';

// 1.4 Print `"The navigator's name is YYYY"`.
console.log(`"The driver's name is ${hacker2}"`);

// Iteration 2: Conditionals
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
let noCharDriver = hacker1.length;
let noChar2Navigator = hacker2.length;

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${noCharDriver} characters.`
  );
} else if (hacker2.length > hacker1.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${noChar2Navigator} characters.`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${noChar2Navigator} characters!`
  );
}

// Iteration 3: Loops
/*
3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
*/

let spacedname = '';
for (let i = 0; i < hacker1.length; i++) {
  spacedname += hacker1[i] + ' ';
}
console.log(spacedname.toUpperCase());

/*
3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
*/
let reverse = '';
for (let i = hacker2.length - 1; i >= 0; i--) {
  reverse += hacker2.charAt(i);
}
console.log(reverse);
/*
3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?
*/

if (hacker1 > hacker2) {
  console.log("The driver's name goes first");
} else if (hacker1 < hacker2) {
  console.log("The navigator's name goes first");
} else {
  console.log('What?! You both have the same name');
}

// or could do it this way too?
if (hacker1.localeCompare(hacker2) === -1) {
  console.log("The driver's name goes first");
} else if (hacker1.localeCompare(hacker2) === 1) {
  console.log("The navigator's name goes first");
} else {
  console.log('What?! You both have the same name');
}
