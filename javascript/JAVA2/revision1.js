//1
let a = 6;
let b = 10;

[a,b] = [b,a]

console.log(`a => ${a}`)
console.log(`b => ${b}`)
//2
// file extention 
function FileExtension (fileName) {
  if (fileName.includes(".") ) {
    let dotIndex = fileName.indexOf(".")
    console.log(fileName.slice(dotIndex)) 
  }else {
    console.log("Error: Invalid file name")
  }
}

// index.html ==> html (without the '.')
FileExtension("index.html")

//3
//palidrome
let arr = ['h','e','l','l','o']
console.log(arr.reverse());

let str = "hello";
console.log(str.split(""))

let myString = "hello";
console.log(myString.split("").reverse("").join(""))

function Palidrome (word) {
  let reversedWord = word.split(" ").reverse().join("")

  if(reversedWord == word.toLowerCase){
    console.log(`${word} is palindrome`)
  }else {
    console.log(`${word} is not a palindrome`)
  }

}

Palidrome("Madam")
Palidrome("Hello")
Palidrome("Wow")
//5
//  removing white spaces
//  "hello how are you doing" == "hellohowareyoudoing"
let word = "hello how are you doing"
console.log(word.split("").join(""))
//6
// a function who counts words 
function countWords(sentence){
  console.log(sentence.split("").filter(x => x != "").length)
  console.log
}
function countWords2(sentence) {
  let rawArr = sentence.split(" ")
  let count = 0;
  for(let i of rawArr) {
    if(i !== ""){
      count++
    }
  }
  console.log(count)
}
//7 
function User (name,age,gender,password1,password2) {
  this.name = name
  this.age = age
  this.gender = gender 
  this.password1 = password1
  this.password2 = password2

 

  this.validate = function(){
    if(this.password1 !== this.password2){
      console.log("Passwords does not match")
    }else if(isNaN(Number(this.password1))){
      console.log("password must be a number")
    }else if(typeof password1 !== "string"){
      console.log("password must be a numeric string")
    }
    else{
        console.log("password validation successsful")
    }
  }
}

const user1 = new User("john",20,"male","12345678","12345678")
console.log(user1)
user1.validate()
//8
let words = ["hello", "", "world", "", "how", "", "are", "you", "doing"]
words.forEach(word => {
  if(word != ""){
    console.log(word)
  }
})