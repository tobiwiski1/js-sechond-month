const arr = [1,2,3];
console.log(`Original array ${arr}`)

// before the Spread sheet
const newArr = [arr[0],arr[1],arr[2],4,5,6]
console.log(`New array (before spread operator)`,newArr);

// using the concat method
const newArr2 = arr.concat([4,5,6])
console.log(`New array (using concat method)`,newArr2)

// After the Spread Operator
const newArr3 = [...arr,4,5,6];
console.log("New array (after spread operators):", newArr3)

// Example with objects
const obj1 = {name: 'John', age: 30};
const obj2 = {job: 'Developer', city: 'New York',hobbies:["coding","reading"]}

const newObj = {...obj1,...obj2}

console.log(newObj)


// ERxample with Arrays
const arr1 = [1,2,3];
const arr2 = [4,5,6];

const mergedArray = [...arr1, ...arr2]
console.log("Merged Array:" ,mergedArray);

// Example wih Functions
function sum(a, b, c) {
    return a + b + c;
}
console.log("Sum of numbers (before spread operator):", sum(1, 2, 3));

let nums = [3,4,5,2,4]
console.log(sum(...nums))
console.log(sum(3,4,5,2,4))

function sumArr(...a){
    return a.reduce((acc , curr) => acc + curr, 0)
}

console.log("sum of all numbers in an array:", sumArr(...nums))

const items = [
    { name: 'Apple', price: 2},
    { name: 'Orange', price: 4},
    { name: 'Mango', price: 3}
];

const totalPrice = items.reduce((a, b) => a + b.price, 0);
console.log("Total price:",totalPrice)

let acc = 0

items.forEach(curr => {
    console.log(curr.price)
    acc += curr.price
})

console.log("Total Price:", acc)