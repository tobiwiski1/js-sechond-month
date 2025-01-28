//use test variable before declaration
console.log(test)

//declare and initialize
var test = 3

//variable hoisting

//hoisting with var
console.log(message)

var message;

//hoisting with let or const
// console.log(Message)

// let Message;


//Function Hoisting
//function call
greet()

//function declaration
function greet(){
    console.log(`Welcome to Javscript`)
}

//function expressions are not hoisted
// word()

// //function expression
// var word = function(){
//     console.log('Javascript')
// }

//variable hoisting inside a function
function Greet(){
    message = "Hello"

    console.log(message);
    var message;
};

Greet()

//attempt to access message outside the function
console.log(message)


//initialization are not hoisted
//display number
console.log(number)
var number = 5

var number;
console.log(number)
number = 10;
console.log(number)