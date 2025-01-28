const input = document.getElementById("equate")
const ouput = document.getElementById("output")
const input_error = document.getElementById("input-error")

input.addEventListener("input", function(){
    let equation = input.value.toString()
    let signs = ["+", "-", "*","/" ,"(",")","×","÷"]
    if (signs.includes(equation.trim().slice(-1)) || !isNaN(equation.trim().slice(-1))){
        input_error.textContent = ""
        input.value = equation.split("").map(x => (x == "*")? "×":x).map(x => (x == "/")? "÷":x).join("")
    }else{
        input.value = equation.trim().slice(0,-1)
        input_error.textContent = 'Input should contain only "Numbers and signs"'
    }

})


function Solve(){
    let equation = input.value.toString()
    let newEquation = equation.split("").map(x => (x == "÷")? "/":x).map(x => (x == "×")?"*":x).join("").split(" ").join("")
    
    try{
        let result =eval(newEquation)
        ouput.textContent = equation + ` = ${result}`
    }catch (err) {
        ouput.textContent = err.name
    }
}

// RangError
// let num1 = 1;
// try {
//     console.log(num1.toPrecision(101))
// }catch(err){
//     console.log("Name:",err.name)
//     console.log("Messages:",err.message)
// }

// // Refrence Error
// let x = 5;
// try {
//     console.log(x + y);
// }catch(err){
//     console.log("Name:",err.name)
//     console.log("Messages:",err.message)
// }finally {
//     console.log("Hello from my finally statement")
// }

// //SyntaxError
// try {
//     console.log(eval("2 */- 3"))
// }catch(err){
//     console.log("Name:",err.name)
//     console.log("Messages:",err.message)
// }

// // TypeError
// try{
//     console.log(num1.toLowercase())
// }catch(err){
//     console.log("Name:",err.name)
//     console.log("Messages:",err.message)
// }

"use strict"
// a = 3
// console.log(a)