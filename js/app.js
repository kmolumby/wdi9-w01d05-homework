
// // Create a variable called firstVariable.
// // Assign it the value of the string "Hello World"
// // Change the value of this variable to some number.
// // Store the value of firstVariable in a new variable called secondVariable
// // Change the value of secondVariable to any string.
// // What is the value of firstVariable?
// // Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
// // ex: Hello, my name is Jean Valjean


// let firstVariable = "Hello World";

// firstVariable = 8;

// let secondVariable = firstVariable;

// secondVariable = "Thank god its Friday";

// const yourName = "Kelly";

// const myNameIs = ( ) => {
//     return (`Hello, my name is ${yourName}`)

// }


// console.log(myNameIs());
// console.log(firstVariable);
// console.log(secondVariable);


// // C. Booleans
// // Using the provided variable definitions, replace the blanks so that all log statements print true in the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console.
//   const a = 4;
//   const b = 53;
//   const c = 57;
//   const d = 16;
//   const e = 'Kevin';

//   console.log(a < b);
//   console.log(c > d);
//   console.log('Name' === 'Name');
//   console.log(true !== false);
//   console.log(false == false == false == false == false == false == true);
//   console.log(false === false)
//   console.log(e === 'Kevin');
//   console.log(a + b === c);
//   console.log(a * a === d);
//   console.log(48 == '48');

// //   D. The farm
// // Declare a variable animal. Set it to be either "cow" or something else.
// // Write code that will print out "mooooo" if the it is equal to cow.
// // Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."

// let animal;

// const isItACow = () => {
//     if ( animal == "cow" || animal == "Cow"){
//         return 'moo';
//     } else {
//         return 'Hey you\'re not a cow';
//     }
// }

// console.log(isItACow('bird'));

// // E. Driver's Ed
// // Make a variable that will hold a person's age. Be semantic.

// // Write code that will print out "Here are the keys", if the age is 16 years or older.

// // If the age is younger than 16, a message should print "Sorry, you're too young."




// const giveKeys = (personsAge) => {
//     if (personsAge >= 16) {
//         console.log()
//         return 'Here are the keys';
//     } else {
//         return 'Sorry, you\'re too young';
//     }
// }


// console.log(giveKeys(56));

// II. Loops

// A. The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive.

// for (let i = 0; i<=10; i++) {
//     console.log(i);
// }


// // Write a loop that will print out all the numbers from 10 up to and including 400.


// for ( let j = 10; j<= 400; j++) {
//     console.log(j);
// }

// Write a loop that will print out every third number starting with 12 and going no higher than 4000.

// for (let k = 12; k<=4000; k+= 3) {
   
//     console.log(k);

// }

// B. Get even
// Print out the even numbers that are within the range of 1 - 100.

// for ( let i = 0; i<=100; i+=2) {
//     console.log(i);

// }
// // Adjust your code to add a message next to even numbers only that says: "<-- is an even number".

// for ( let i = 0; i<=100; i++) {
//     if (i % 2 === 0 ){
//     console.log(`${i} <--- this is an even number`);
//     } else {
//         console.log(i);
//     }
// }

// C. Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five.
// Example Output:

// I found a 5. High five!
// I found a 10. High five!


// for( let i = 0; i<= 100; i++) {
//     if (i % 5 === 0) {
//         console.log(` I found a ${i}. High five`)
//     } 
// }

// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three.
// Example Output:

// I found a 3. Three is a crowd
// I found a 5. High five!
// I found a 6. Three is a crowd
// I found a 9. Three is a crowd
// I found a 10. High five!

// for( let i = 0; i<= 100; i++) {
//     if (i % 5 === 0) {
//         console.log(` I found a ${i}. High five`);
//     } else {
//         if (i % 3 === 0) {
//             console.log (`I found a ${i}. Three is a crowd`);
//         }
//     }
// }

// D. Savings account
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your banck_account should have $55 in it.
// let bankAccount = 0;
// for ( let i = 1; i <= 10; i++) {
//   bankAccount = bankAccount + i;
// }
// console.log(bankAccount);

// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your banck_account should have $10,100 in it.

// let bankAccount = 0;
// for ( i = 1; i<=100; i++){
//     bankAccount = bankAccount + i
// }

// bankAccount = bankAccount * 2

// console.log(bankAccount);