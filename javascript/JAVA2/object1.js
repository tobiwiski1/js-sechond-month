 //modifying object properties
// const person = {
//     name : "Bobby",
//     hobby : "Dancing"
// };
// console.log(person)

// //modify property
// person.hobby = "Drumming"
// console.log(person)

//add object properties
// const student = {
//     Name : "Monica",
//     age : 20
// }

// //add properties
// student.rollNo = 14;
// student.faculty = "Science";

// //accessing our objects
// console.log(student)


// //delete objdect properties
// const employee = {
//     name : "Tony",
//     position : "Officer",
//     salary : 30000
// }

// //delete properties
// delete employee.salary

// console.log(employee)


//object method
// const person = {
//     name : "John",
//     age : 30,

//     //use function as value
//     greet : function(){
//         console.log("Bob Says Hi")
//     }
// };

// person.greet()


//nested object
//outer obj
// const student = {
//     name : "Jones",
//     age : 20,

//     //inner obj
//     marks :{
//         science : 70,
//         math : 75,
//     }
// }

// // // console.log(student)
// console.log(student[1])




// const person = {
//     firstName:"John",
//     lastName:"Doe",
//     age:20,
//     gender:"Male",
//     hobbies:["Coding","Writing"],
//     address:{
//         city:"New York",
//         state:"NY",
//         country:"USA"
//     },
//     friend:{
//         firstName:"David",
//         lastName:"Jones",
//         age:30,
//         hobbies:{
//             coding:{
//                 type:[{frontend:["javascript","Html","css"], BackEnd : ["Django","Python","C ++","Java"]}]
//             },
//             cooking:{
//                 type:["Rice","Beans","Spaghetti"]
//             }
//         }
//     }
// }
// console.log(person.friend.hobbies.coding.type)
// console.log(person.friend.hobbies.cooking.type)



//method and this keyword
const dog = {
    name : "Rocky",

    //bark method
    bark : function(){
        console.log("Woof!!")
    }
};

dog.bark()


//this keyword
// const person = {
//     name : "John",
//     age : 30,

//     //method
//     introduce : function(){
//         console.log(`My Name is ${this.name} And I Am ${this.age} Yrs Old`)
//     }
// }

// person.introduce()

//add method to an object
let student = {
    name : "John",

};

//add new method
student.greet = function(){
    console.log("Hello World")
}

student.greet()


//object constructor
//constructor function
// function Person(){
//     this.name = "John",
//     this.age = 20
// }

// //create obj
// const person = new Person()


// //print obj attributes
// console.log(person.name)
// console.log(person.age)


//multiple constructor
// function Person(){
//     this.name = "John",
//     this.age = 23,

//     this.greet = function(){
//         console.log("Hello")
//     }

// }

// //create objects
// const person1 = new Person()
// const person2 = new Person()

// //call obj
// console.log(person1.name)
// console.log(person2.name)


//function constructor with parameters
function Person(person_name,person_age,person_gender){
    this.name = person_name,
    this.age  = person_age,
    this.gender = person_gender,

    this.greet = function(){
        return (`Hi ${this.name}`)
    }
}


//create our objects
const person1 = new Person("John","20","Male")
const person2 = new Person("Mary","18","Female")

//access our obj
console.log(person1.name)
console.log(person2.name)