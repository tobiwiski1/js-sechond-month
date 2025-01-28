const greet = {
    fName : "John",
    lName : "Doe",
    age : 20,

}
console.log(greet)
//DOT NOTATION
 console.log(greet.fName)

 //bracket notation
 console.log(greet["lName"])


//object properties

//modify an object
const person = {
    fName : "Bobby",
    hobby : "dancing"
}

//modify object
person.hobby = "games"

console.log(person)

//adding to an object
const student = {
    fName : "lucky",
    age : 20,
}

//adding to an object
student.Rollno = 10
student.Faculty = "science"


console.log(student)

//deleting from an object
const food = {
    Cdrate : "rice",
    protein : "beans",
    vitamins : "vegetable",
    fatOil : "Butter"
}

//deleting from an object
delete food.fatOil

console.log(food)


// object
const tv = {
    fName :"lg",
    lName :"hisense"
}
console.log(tv)

//modify
const fan = {
    fName :"Ox",
    lName :"Smg",
}

person.Country = "german"
console.log(fan)

//adding
const Ac = {
    fName :"Haier",
    lName :"Koi",
}

student.Rollno = 20
console.log(Ac)

//delete
const cars = {
    fName :"tesla",
    lName :"BMW",
    nName :"soroto",
}

delete cars.nName
console.log(cars)




//Object Method
//dog object
const dog = {
    name : "Rocky",

    //bark method
    Bark:function (){
        console.log("Woof!!")
    }
};

// access method
dog.Bark()

//This keyword
const Person = {
    name : "John",
    age : 20,

    // method
    introduce : function(){
            console.log(`My name is ${this.name} and i am ${this.age} yrs old`)
    }
};

//access method
Person.introduce()


//add method to an object
let pupil = {
    name : "John",
}

//add a new method
pupil.greet = function(){
    console.log("Hello")
};  

pupil.greet()

//Javascript built in method

//console.log()
let a = "Hello world"
console.log(a)

//concat
let fName = "John";
let lName = "Doe";

let add = fName.concat(lName)
console.log(add)