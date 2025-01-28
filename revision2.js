//palidrome
let arr = ['h','e','l','l','o']
console.log(arr.reverse(""));

let str = "hello"
console.log(str.split(""));

let myString = "hello"
console.log(myString.split("").reverse("").join(""))


function palidrome (word) {
  let reversedWord = (word.split("").reverse("").join(""))

  if(reversedWord == word.toLowercase) {
    console.log(`${word} is a palidrome`)
  }else {
    console.log(`${word} is not a palidrome`)
  }
}

palidrome("madam")
palidrome("hello")
palidrome("wow")
palidrome("how are you doing")
  
// hello how arer you doing ="hello how are you doing"
let word = "hello how are you doing"
console.log(word.split("").join(""))

function countWords (sentence) {
  console.log(sentence.split("").filter(x => x != "").length)
  console.log(count)
}


function User (name,age,gender,password1,password2) {
  this.name = name 
  this.age = age 
  this.gender = gender
  this.password1 = password1 
  this.password2 = password2
}
