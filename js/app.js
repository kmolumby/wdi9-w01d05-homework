
// Create a variable called firstVariable.
// Assign it the value of the string "Hello World"
// Change the value of this variable to some number.
// Store the value of firstVariable in a new variable called secondVariable
// Change the value of secondVariable to any string.
// What is the value of firstVariable?
// Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
// ex: Hello, my name is Jean Valjean


let firstVariable = "Hello World";

firstVariable = 8;

let secondVariable = firstVariable;

secondVariable = "Thank god its Friday";

const yourName = "Kelly";

const myNameIs = ( ) => {
    return (`Hello, my name is ${yourName}`)

}


console.log(myNameIs());
console.log(firstVariable);
console.log(secondVariable);