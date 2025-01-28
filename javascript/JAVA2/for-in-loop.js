//alterating over an object
const student = {
  name : "john",
  class : 7,
};

//loop through the keys of an object            
for(let key in student){

    //display the key-value pairs
      console.log(`${key} = ${student[key]}`)
}


//iteratinmg over a string

const string = "book";

//using for in loop
for (let i in string){
  console.log(string[i])
}


//iterating over an array 
//define an array 
const word = ["Hello",1,"Javascript"]

for (let x in word){
  console.log(word[x])
}


//for of loop


//array
const students = ['John','sarah','moses']

for(let element of students){
  console.log(element)
}



//strings
const strings = "HTML"

for (let i of strings){
  console.log(i)
}





