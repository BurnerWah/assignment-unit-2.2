// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')

// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/

// 1. WRITE YOUR DESCRIPTION HERE
// We create a variable named `name`, and set it to the string "Dane".
// Then, we check if `name` is set to the string "Mary", and if so,
// we log "Hi, Mary!" to the console. If not, we log "How do you do?"
// to the console.
// When executed, "Hod do you do?" is logged to the console

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We create a variable named `secret`, which is initially undefined. Then, we
// create a variable named `code`, and set it to the number 123. Then, if `code`
// is equal to 123, set set secret to the string super, and multiply `code` by
// 2, setting it to 246. Next, we check if `code` is greater than 250, which it
// is not. If it were, we would set set secret to the string duper. Finally, we
// log `secret` to the console.
// When executed, "super" is logged to the console.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// First, three variables are declared: `isStudent`, a boolean set to true,
// `age`, a number set to 34, and `zip`, a number set to 55407. Then, we check
// to see if `isStudent` is true and `zip` is greater than 80000. If so, we log
// "You're a student on the West Coast!" to the console. If either condition is
// false, we check if `isStudent` is false or if `age` is less than 30. If
// either condition is met, we log "What are your hobbies?" to the console. If
// neither condition is met, we check if `isStudent` is true, and if so we log
// "Welcome to Prime!" to the console. If not, we log "How about the weather?"
// to the console.
// When executed, "Welcome to Prime!" is logged to the console.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/

// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/

//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// colorOne and colorTwo have their values swapped; colorOne should be blue,
// and colorTwo should be red.
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  // After this there should be another line setting colorTwo to 'purple'
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
// this can be a constant
let temp = 40;
const time = 4;

// use && instead of || here to make sure both conditions are true
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// There are several fixes for this
// The simplest would be to change the `<=` to a `>`, but I would prefer
// it if enter was placed before no entry instead as IMO it's easier to read.
// Also, while it doesn't actually fix anything, having the condition be
// `age >= minAge` would also make it easier to read.
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
