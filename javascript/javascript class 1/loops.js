//for Loop

//using the for loop to print out numbers ranging from 1 to 10
for(let i = 1; i <= 10 ; i++){
    console.log(i)
}

//from 10 to 1
for (let i = 10; i >= 1; i--){
    console.log(i)
}

//program to display the sum of natural numbers
// let sum = 0
// const n = 15

// for(let i = 1; i <= n; i++){
//     sum += i  //sum = sum + 1
// }

// console.log(`Sum : ${sum}`)

//iterating through an array
const fruits = ["apple","banana","Mango"]

for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}

//using for loop to print even and odd numbers

//even numbers
for (let i = 2 ; i <= 20 ; i += 2){
    console.log(i)
}

//odd numbers
for (let i = 1; i <= 19 ; i += 2){
    console.log(i)
}

//while loop
//display number from 1 to 5

let i = 1

while(i <= 5){
    console.log(i)
    i++
}

//sum
// let a = 1
// let sum = 0

// while(a <= 7){
//     console.log(a)
//     a ++
//     sum += a
// }

// console.log(`Sum : ${sum}`)


//printing even and odd numbers using while loop

//even
// let b = 2
// let sum = 0

// while(b <= 20){
//     console.log(b)
//     b += 2
//     sum += b
// }

// console.log(`Sum : ${sum}`)

//odd numbers
let x = 1
let sum = 0

while(x <= 19){
    console.log(x)
    x += 2
    sum += x
}

console.log(`Sum : ${sum}`)


//do while loop
let y = 3

do{
    console.log(y)
    y--
}while(y > 0)

//even number
let z = 2
let add = 0

do{
    console.log(z)
    z += 2
    add += z
}while(z <= 10)

console.log(`Add : ${add}`)

//Break Statement
let mul = 0
for(let i = 1; i <= 5; i++){

    //break condition
    if(i == 4){
        break;
    }else{
        mul += i
    }
    console.log(i)
}

console.log(`Sum : ${mul}`)

//continue statement
let sub = 0
for(let i = 1;i <= 5;i++){
    //skip iteration
    if(i % 2 === 0){
        continue;
    }else{
        sub += i
    }
    console.log(i)
}
console.log(`Sum : ${sub}`)

for(let i = 1; i <= 10; i++){
    if(i > 4 && i < 9){
        continue;
    }
    console.log(i)
}

//switch statement
let trafficlight = "Red"
let message = ""

switch(trafficlight){
    case "Red":
        message = "Stop Immediately";
        break;
    case "Yellow":
        message = "Prepare to go";
        break;
    case "Green":
        message = "You can go"
        break;
    default :
        message = "Invalid Trafficlight"          
}
console.log(message)