//function
function greet(){
    console.log("Hello World")
}

//function expression
let displayPi = function (){
    console.log("PI = 3.214")
}


//how to call a function
//call the greet function
greet()

//call the func expression
displayPi()


//js function arguements
function Greet(name){
    console.log(`Hello ${name}`)
}

//pass arguement to the function
Greet("John")

function GREET(name){
    console.log(`Hey ${name}`)
}

//pass david as arguement
GREET("David")

//pass Daniel as arguement
GREET("Daniel")

//functions to add two numbers
function addNumbers(num1 , num2){
    let sum = num1 + num2;
    console.log(`Sum = ${sum}`)
}

//call function by passing arguements
addNumbers(3,2)

//The return statement
//function to find square of a number
function findSquare(num){
    //return square
    return num * num
}

//call the function and store the return
let square = findSquare(4)

console.log(`Square = ${square}`)

//the return statement terminates a function
function display(){
    console.log('Welcome')

    return "Javascript Function"

    console.log('Word')
}
let message = display()
console.log(message)    

// Javscript library function
//Math.sqrt()
let squareroot = Math.sqrt(4)
console.log(`The squareroot of 4 is ${squareroot}`)

//Math.pow
let power = Math.pow(2,3)
console.log(`2 to the power of 3 is ${power}`)

//toLowerCase() && toUpperCase()
let band = "java script"
let bandUpper = band.toUpperCase()
console.log(bandUpper)

let low = "FUNCTION"
let lower = low.toLowerCase()
console.log(lower)