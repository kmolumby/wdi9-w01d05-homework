
// I. Variables & Datatypes
// A. Q + A
// How do we assign a value to a variable? 
    // we assign a value to a variable by setting it equal to what we want to assign
    // const variable = value;
// How do we change the value of a variable?
   // we change the value of a variable by setting it equal to a new value
   // variable = newValue;
// How do we assign an existing variable to a new variable?
   // you would give the value of the existing variable to the new variable
   // newVariable = oldVariable
// Remind me, what are declare, assign, and define?
        // declaring is initiating the variable so that we can use it within our scope, assigning it is putting the variable in the code, assigning is giving value to the variable
// What is pseudocoding and why should you do it?
        // pseudocoding is talking out what the code will do in basic english; you should do this to work through what the code is going to do and all the steps you need to get there
// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
// 70% / 30%

// B. Strings

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


// // C. Booleans
  const a = 4;
  const b = 53;
  const c = 57;
  const d = 16;
  const e = 'Kevin';

  console.log(a < b);
  console.log(c > d);
  console.log('Name' === 'Name');
  console.log(true !== false);
  console.log(false == false == false == false == false == false == true);
  console.log(false === false)
  console.log(e === 'Kevin');
  console.log(a + b === c);
  console.log(a * a === d);
  console.log(48 == '48');

// //   D. The farm

let animal;

const isItACow = () => {
    if ( animal == "cow" || animal == "Cow"){
        return 'moo';
    } else {
        return 'Hey you\'re not a cow';
    }
}

console.log(isItACow('bird'));

// // E. Driver's Ed

const giveKeys = (personsAge) => {
    if (personsAge >= 16) {
        console.log()
        return 'Here are the keys';
    } else {
        return 'Sorry, you\'re too young';
    }
}


console.log(giveKeys(56));

// II. Loops

// A. The basics

for (let i = 0; i<=10; i++) {
    console.log(i);
}




for ( let j = 10; j<= 400; j++) {
    console.log(j);
}


for (let k = 12; k<=4000; k+= 3) {
   
    console.log(k);

}

// B. Get even

for ( let i = 0; i<=100; i+=2) {
    console.log(i);

}

for ( let i = 0; i<=100; i++) {
    if (i % 2 === 0 ){
    console.log(`${i} <--- this is an even number`);
    } else {
        console.log(i);
    }
}

// C. Give me Five


for( let i = 0; i<= 100; i++) {
    if (i % 5 === 0) {
        console.log(` I found a ${i}. High five`)
    } 
}



for( let i = 0; i<= 100; i++) {
    if (i % 5 === 0) {
        console.log(` I found a ${i}. High five`);
    } else {
        if (i % 3 === 0) {
            console.log (`I found a ${i}. Three is a crowd`);
        }
    }
}

// D. Savings account

let bankAccount = 0;
for ( let i = 1; i <= 10; i++) {
  bankAccount = bankAccount + i;
}
console.log(bankAccount);


let bankAccount = 0;
for ( let i = 1; i<=100; i++){
    bankAccount = bankAccount + i
}

bankAccount = bankAccount * 2

console.log(bankAccount);

// E. Multiples of 3 and 5

let sum = 0;

for ( let i = 0; i<=1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum = sum + i
    }
}

console.log(sum);


// // III. Arrays & Control flow

// // A. Talk about it:
// // What are the things in an array called?
// // elements

// // Do Arrays guarantee those things will be in order?
// // Kind of confusing the way this question is posed but elements have a defined index in the list
// // so yes it guarantees that the elements will be in a specific order

// // What real-life thing could you model with an array?
// // A menu could be an example of an array, you have a list of items on the menu

// // B. Easy Does It

const quotes = ['Get busy living or get busy dying', 'Where there is love there is life.', 'A joke is a very serious thing.']

// // C. Accessing elements

const randomThings = [1, 10, "Hello", true]

randomThings[0];


randomThings[2] = "World"

console.log(randomThings[2]);

// // D. Change values

const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]


ourClass[2];

ourClass[4] = 'Octocat';
console.log(ourClass[4]);


ourClass.push('Cloud City');

console.log(ourClass);


// // E. Mix It Up
// // Given the following array: 

const myArray = [5, 10, 500, 20]

// // Add the string "Egon" to the end of the array. Add another string of your choice to the end of the array.
myArray.push('Egon', 'Yes');
console.log(myArray);
// // Remove the 5 from the beginning of the array.
myArray.shift();
console.log(myArray);

// // Add the string "Bob Marley" to the beginning of the array.
myArray.unshift('Bob Marley');
console.log(myArray);
// // Remove the string of your choise from the end of the array.
myArray.pop();
console.log(myArray);

// // Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse() method return anything?
// // yes it mutated it, mutating means changing or affecting , the .reverse reverses the array
myArray.reverse();
console.log(myArray);

// F. Biggie Smalls

const biggieSmalls = (num) => {
if (num < 100) {
    console.log("little number");
} else { 
    console.log("big number")
}

}

console.log(biggieSmalls(1000));


// G. Monkey in the Middle

const monkeyInTheMiddle = (num) => {
    if (num< 5) {
        console.log('little number') 
    } else if (num > 10 ) {
        console.log('big number');
    } else {
        console.log('monkey in the middle')
    }
    
}

console.log(monkeyInTheMiddle(900));
console.log(monkeyInTheMiddle(2));

// H. What's in Your Closet?

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

// // // Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);

kristynsCloset.splice(6,0, 'raybans');
console.log(kristynsCloset);
kristynsCloset[5] = 'stained yellow hat'
console.log(kristynsCloset);
console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]} and ${thomsCloset[2][1]}`);
thomsCloset[1][2] = 'footie pajamas';
console.log(thomsCloset);


// // A. printGreeting



const printGreeting = (name) => {
    return `Hello there ${name}`;
}
console.log(printGreeting("Slimer"));

// B. printCool

const printCool = (name) => {
    return `${name} is cool`;
}

console.log(printCool("Captain Reynolds"));


// // C. calculateCube

const calculateCube = (num) => {
    return num*num*num;
}
console.log(calculateCube(5));


// // D. isVowel

const isVowel = (char) => {
    if (char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U' || char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u'  ) {
        return true;
    } else {
        return false;
    }
}

console.log(isVowel("A"));
console.log(isVowel("i"));
console.log(isVowel("z"));


// E. getTwoLengths


const getTwoLengths = (x, y) => {
    x.length, y.length
}

console.log(getTwoLengths('Hello', 'worldddd'));

// F. getMultipleLengths

const getMultipleLengths = (str) => {
    const array = [];
    for(let i = 0; i < str.length; i++){
        array.push(str[i].length)
    }
    console.log(array);
};



// G. maxOfThree
const maxOfThree = (num1, num2, num3) => {
    let biggestNumber = num1;
    if(num2 > biggestNumber){
        bigNumber = num2;
    }
    if(num3 > biggestNumber){
        biggestNumber = num3;
    }
    return bigNumber
};

// H. printLongestWord

const printLongestWord = (arr) => {
    let longestWord = '';
    for ( let i = 0; i < arr.length; i++) {
        if ( arr[i].length > longestWord.length){
            longestWord = arr[i];
        }
    }
    return longestWord;

// I. transmogrify


 const transmogrify = (num1,num2,num3) => {
    return(Math.pow((num1*num2), num3));
}
console.log(transmogrify(5, 3, 2));


// J. reverseWordOrder v2

const reverseWordOrder = (str) => {
  const words = [];
  let word = "";
    for (let i = 0; i < str.length; i++) {
 
        if (str[i] === " "){
        
            words.push(word);
            word = '';
        } else {
            word +=str[i];
        }
        if (i === str.length -1) {
            words.push(word);
        }
    }

    const backwardsWords = [];
    for (let i = words.length - 1; i>= 0; i--) {
        
        backwardsWords.push(words[i])
    }
     let resultString = "";

     if (backwardsWords.length -1 === i) {
        resultString += backwardsWords[i];
    } else {}
     resultString += backwardsWords[i] + " ";   
}

console.log(reverseString("I use Lâncome on my comb"));

// K. Get down and dirty with Math.random()

//1.
        const returnRandomOneAndTen = () => {
            return Math.ceil(Math.random()*(10-1)+1);
        }
        console.log(returnRandomOneAndTen);
//2.
        const returnRandomTenAndHundred = () => {
            return Math.floor(Math.random()*(100-10)+10);
        }
        console.log(returnRandomOneAndTen);

// 3.
        const returnRandom = () => {
            return Math.random()*(13267-532)+532;
        }
        console.log(returnRandom);

// 4.
    const returnRandomOneAndTen = () => {
    return Math.ceil(Math.random()*(10-1)+1);
}
console.log(returnRandomOneAndTen);

// I think this is the same as number 1?


// 5.
        quotes.push("So many books, so little time.");
        quotes.push('A room without books is like a body without a soul.');
        quotes.push('You only live once, but if you do it right, once is enough.');
        const getRandomElement = (arr) => {
            const max = arr.length - 1;
            return arr[Math.floor(Math.random()*(max+1))];
        }

 

//Objects
// Let's set up an object data structure. Let's say we have a website that sells products, and we have a user of our website, and we want to store that user's data. The object data structure is a good way to organize the data from our user.

// A. Make a user object

const user = [
    name: 'Kelly',
    email: 'kmolumby@gmail.com',
    age: 30,
    purchased: []
];

console.log(user)

// B. Update the user
user.email = 'anonymous@yahoo.com';
user['age'] = user['age']++;
console.log(user)

// C. Adding keys and values
user.location = "denver";
console.log(user)

// D. Shopaholic!

user.purchased.push('carbohydrates');
user.purchased.push('peace of mind');
user.purchased.push('Merino jodhupurs');

console.log(user);
console.log(user.purchased[2]);

// E. Object-within-object
   user.friend = {
       name: 'Jessica',
       age: 32,
       location: 'denver',
       purchased: [],

   };

   console.log(user.friend);
   console.log(user.friend.name);
   console.log(user.friend.location);

   user.friend.age = [55];

   user.friend.purchased= 'The One Ring';
   user.friend.purchased = ' a latte';

   console.log(user.friend.purchased[1])


// F. Loops

for (let i = 0; i < user.purchased.length; i ++) {
    console.log(user.purchased[i]);
}

for (let i = 0; i < user.friend.purchased.length; i ++) {
    console.log(user.friend.purchased[i]);
}

// G. Functions can operate on objects

const updateUser = () => {
    console.log(user['age'] = user['age']++);
    return user.name.toUppercase();
}

console.log(updateUser(user));


const oldAndLoud = (person) => {
    console.log(person['age'] = person['age']++);
    return person.name.toUppercase();

}





