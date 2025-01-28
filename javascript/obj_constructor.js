// constructor function
function Person(){
    this.name = "John",
    this.age = 21
}

// create an object
const person = new Person()

console.log(person.age)
console.log(person.name)
console.log(person)

// creating multiple object with function constructor
function Person(){
    this.name = "David",
    this.age = 20

    this.greet = function(){
        console.log("Hello !!!")
    }
}

//create objects
const person3 = new Person()
const person4 = new Person()

console.log(person3.name)
console.log(person4.age)


//function constructors with parameters
function Person(person_name,person_age,person_gender){
    this.name = person_name,
    this.age = person_age,
    this.gender = person_gender,

    this.greet = function(){
        return (`Hi ${this.name}`)
    }
}
//create object and pass arguement
let person1 = new Person("John",20,"Male")
console.log(person1)
// console.log(person1.greet ())

let person2 = new Person("Mary",18,"Female")
console.log(person2)
// console.log(person2.greet ())

// built in contructor

//object() constructor
const ppl = new Object ({name : "tony", age : 20})

// string consructor
const name = new String("John");

// Number constructor
// const number = new Number (57);

// Boolean constructor
const count = new Boolean(true)

console.log(ppl)
console.log(name)
console.log(number)
console.log(count)

// object prototype
function Person(){
    this.name = "John"
    this.age = 20
}

//create object
const Person1 = new Person()
const Person2 = new Person()

//add a new prototype
Person.prototype.gender = "Male"

console.log(Person1.gender)
console.log(Person2.gender)

//Getter and Setters

//data property
const student = {
    // data  property
    fName : "Monica"
}


//accessor property
//getter
const students = {
    //data property
    fName : "Monica",

    //accessor property(getter)
    get getName(){
        return this.fName
    }
}

//accessing data property
console.log(student.fName)

//accessing getter method
console.log(students.getName)

//trying to access as a method
// console.log(students.getName())

//javascript setter
const Student = {
    fName : "Sarah",

    //accessor property(setter)
    set changName(newName){
        this.fName = newName;
    }
}

console.log(Student.fName)

//change(set) object property
Student.changName = "Mary"

console.log(Student)


//prototype
//function Car{
//      console.log("Car instance created")
//};

// // add a property to prototype
//Car.prototype.color = "Red";

// //add a property to prototype
// Car.proptotype.drive = function(){
//      console.log


const fruit = ["Apple","Banna","Orange","Mango"];
console. log(fruit.join("_"))
console.log(fruit.join("*"))

fruit.pop()
console.log(fruit)
fruit.pop()
console.log(fruit)
fruit.push("Grape")
console.log(fruit)
fruit.push("Watermelon")
console.log(fruit)

fruit.shift()
console.log(fruit)
fruit.shift()
console.log(fruit)
fruit.unshift("Apple")
console.log(fruit)
fruit.unshift("Coconut")
console.log(fruit)

fruit[3] = 'Cherry';
console.log(fruit);

delete fruit[2]
console.log(fruit)

delete fruit[fruit.length -1]
console.log(fruit)

const girls = ["Cecilie","Mary"]
const boys = ["David","John","Daniel"]

const children = girls.concat(boys);
console.log(children)

const fruits = [ "Banana","Orange","Apple","Mango"]
fruits.copyWithin(2,0,2)
console.log(fruits)

const  myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(myArr)

// const  myArr = [1,2,3,4,5,6];
// const newArr = myArr.flatMap(x => [x, x * 10]);
// console.log(myArr)

const  fruita = ["Banana","Orange","Apple","Mango"];
fruita.splice( 2 , 0, "Lemon","Kiwi");
console.log(fruita)

const  fruite = ["Banana","Orange","Apple","Mango"];
fruite.splice(0,1);
console.log(fruite)

const months = ["Jan","Feb","Jun","Jul"];
const spliced = months.toSpliced(0,1);
console.log(spliced)

const frui = ["Banana","Orange","Apple","Mango"];
const citrus = frui.slice(2);
console.log(citrus)

const cars = ["Lexus","Ferrai","Tesla"]
const people = ["RollsRoyce","BMW","😊😊"]

const owner = cars.concat(people);
console.log(owner)

//toSTring
let items = ['Javascript',1,'Hello']

let itemString = items.toString()

console.log(itemString)

// indexOf.js
let language = ['Java','html','css','React']

let lang = language.indexOf('React')

console.log(lang)

//findIndex
function isOdd(element){
    return element % 2 !== 0
}

let number = [2,8,13,4]

let arr = ["apple", "", "banana", "grape", "", "lemon"]
arr.forEach(x => {
    console.log(x)
})
arr.forEach(x => {
    if (x != "") {
        console.log(x)
    }
})