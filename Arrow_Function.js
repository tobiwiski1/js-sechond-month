//syntax for arrow function
// let myFunc = (arg1 , arg2 , ...argN) =>{
//   statements
// }

const user = ()=> console.log("Hello World")
user()

const greet_user = (user) => console.log("Hello",user)

greet_user("Daniel")
greet_user("John")

//how to use arrow function to add,subtract,divide,mulyiply,divide

const add = (num1,num2) => console.log(num1 + num2)

const sub = (num1,num2) => console.log(num1 - num2)

const divide = (num1,num2) => console.log(num1 / num2)

const mul = (num1,num2) => console.log(num1 * num2)

const square  = (num1,num2) => console.log(num1 ** num2)

const squareroot = (num1) => console.log(num1 ** 0.5)

const power = (num1,num2) => console.log(num1 ** num2)


add(2,4)
sub(10,5)
divide(10,2)
mul(2,5)
square(4,4)
squareroot(81)
power(4,2)


//arrow function for a for loop 
const counter = (start,end) =>{
  for (let i = start; i <= end; i ++){
    console.log(i)
  }
}
counter(1,10)