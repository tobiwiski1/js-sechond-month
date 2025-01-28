//array method
let cars = ["BMW","FORD","TOYOTA"]
console.log(cars.length)


//array tospliced()
const months = ["jan","mar","Mar","Apr"]
const spliced = months.toSpliced(0 ,1)
console.log(spliced)

//js array splice
const fruits = ["Banana", "Orange", "Manago", "Lemon", "Apple"]
const citrus = fruits.splice(2)
console.log(citrus)

//array concat
const myGirls = ["Mary", "Cecillia", "Sarah"]

const myBoys = ["Smith", "John", "Doe"]


const myCHildren = myGirls.concat(myBoys)
console.log(myCHildren)


// merge three arrays together 
const arr1 = ["How"]
const arr2 = ["Are"]
const arr3 = ["You"]

const arr4 = arr1.concat (arr2 ,arr3)
console.log(arr4)

let language = ["java", "java", "phyton", "Javascript"]

let index = language.indexOf("java")
console.log(index)

// //forEach array method 
const code = ["Html", "Javascript", "CSS", "C Sharp", "C++", "Django"]
code.forEach(function(index){
  console.log(index)
}
)

//array find
let numners = [1,3,4,9,8]

//function to check even numbers
function isEven(element){
    return element % 2 ==0
}

let evenNumber = numbers.find(isEven)
console.log(evenNumber)

//array findIndex()
function isOdd(element){
    return element % 2 !==0
}

//defining an array of integers
let num = [2,8,1,3,4]

let firstOdd =  numbers.findIndex(isOdd)

console.log(firstOdd)