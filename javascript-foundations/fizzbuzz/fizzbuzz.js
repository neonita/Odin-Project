"use strict";
let answer = parseInt(
  prompt("Please enter the number you would like to FizzBuzz to.")
);

// Loops from 1 to the entered number (answer)
for (let i = 1; i <= answer; i++) {
  // use modulus because we want to specify that the remainder is preceisely 0
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else {
    console.log(i);
  }
}

/** NOTES
  parseInt() 
  function that converts a string and returns an integer.
 */
