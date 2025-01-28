//how to add,multiply,divide,subtract,multiplication using function

// //add
// function add(x,y){
//     console.log(x + y)
// }

// //subtract
// function sub(x,y){
//     console.log(x - y)
// }

// //divide 
// function divide(x,y){
//     console.log(x / y)
// }

// //multiplication
// function multiply(x,y){
//     console.log(x * y)
// }

// //square 
// function square(x){
//     console.log(x ** 2)
// }

// //squareroot
// function squareroot(x){
//     console.log(x ** 0.5)
// }

// //call our function
// add(3,2)
// sub(10,5)
// divide(6,2)
// multiply(2,3)
// square(5)
// squareroot(4)

// //for loop
// for (let i = 2; i <= 12; i +=2){
//     console.log(i)
// }

// //while
// //display number from 1 to 5

// let i = 2
// let sum =0

// while(i <= 10){
//     console.log(i)
//     i+= 2
//     sum += i
// }

// console.log(`Sum = ${sum}`)

// //using the continue statement to get even numbers
// let Add = 0
// for(let i = 2;i <= 10;i++){
//     //skip iteration
//     if(i % 2 !== 0){
//         continue;
//     }else{
//         Add += i
//     }
//     console.log(i)
// }
// console.log(`Sum : ${Add}`)


//Multiplication table with function
//program to generate multiplication

// //take input from the user
// const number = parseInt(prompt("Enter an integer"))

// //creating a multiplication table
// for(let i = 1;i <= 12; i++){
//     //multiply i with number
//     const result = i * number

//     //display the result
//     demo.innerHTMl = `${number} * ${i} = ${result}`
// }


//multiplication table with recursive function
// function Multiply(x , y =1){
//     let a = x * y
//     console.log(x, "x" , y ,"=" , a)
//     let y2 = y + 1
//     if(y2 <= 12){
//         Multiply(x , y2)
//     }
// }
// Multiply(3)


// //second method
// function multiply(a,b = 1){
//     console.log(`${a} x ${b} = ${a * b}`)
//     let b2 = b + 1
//     if(b2 <= 10){
//         multiply(a , b2)
//     }
// }
// multiply(2)


//for loop
for (let i = 1;i <= 10; i++){
    console.log(i)
}

//even numbers and get their sum
let sum = 0

for(let i = 2; i <= 10; i+= 2){
    sum += i
    console.log(i)
}

console.log(`Sum = ${sum}`)


//while loop
let i = 1

while(i <= 5){
    console.log(i)
    i++
}

//using the while loop to get even number and the sum
let a = 2;
let add = 0

while(a <= 10){
    console.log(a)
    add += a
    a += 2
}

console.log(`Sum = ${add}`)


//do while loop
let x = 5

do{
    console.log(x)
    x--
}while(x >= 1)

   //using do while loop to get even number and their sum
let num = 2   
let Add = 0

do{
    console.log(num)
    Add += num
    num += 2
}while(num <= 10)
 
//call the sum
console.log(`Sum = ${Add}`)    