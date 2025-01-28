//program to count down to 1

//recursive function
function Counter(count){
    //display count
    console.log(count)
    
    if(count > 1){
        //decrease count
        count = count - 1

        //call counter with a new value
        Counter(count)
    }else{
        //terminate the message
        return;
    };
};

//call the function
Counter(5)


function Counter(count){
    //display count
    console.log(count)
    
    if(count < 10){
        //increase count
        count = count + 1

        //call counter with a new value
        Counter(count)
    }else{
        //terminate the message
        return;
    };
};

//call the function
Counter(1)

//Factorial of a number
//recursive function
function Factorial(num){
    //base case
    //recurse only if num is greater than 0
    if(num > 0){
        return num * Factorial(num - 1)
    }else{
        return 1;
    };
};

let x = 10

//store result of Factorial() in variable
let y = Factorial(x)

console.log(`The Factorial of ${x} = ${y}`)

//infinite recursion
//recursive function
function greet(){
    //display hello
    console.log("Hello")

    //call itself
    greet()
};

//access function
greet()