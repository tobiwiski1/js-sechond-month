//local scope
function greet(){
    //local variable
    var message = "Hello";
    console.log(`Local : ${message}`)
}
greet()

//trying to access message variable
//outside the greet() function
// console.log(`Global : ${message}`)

//Global scope
//declare global variable
var message = "Hello";

function word(){
    console.log(`Local : ${message}`)
}
word()

console.log(`Global : ${message}`)

//block level scope
function display_scope(){
    //declare variable in local scope
    let message = "local";

    if(true){
        let message = 'Blocl-level';

        console.log(`inner scope : ${message}`)
    }
    console.log(`Outer scope : ${message}`)
}

display_scope()