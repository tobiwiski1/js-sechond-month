//single quote
let name = 'John'
console.log(name)

//double quote
let fruits = "Apple"
console.log(fruits)

//bactick 
let cars = `Benz`
console.log(cars)

//access string elements

//using indexes
let message = "Hello"
console.log(message[1])

//using charAt
let code = 'Javscript'

console.log(code.charAt(4))

//features of js string

//js string are not immutable
let msg = 'hello';
msg[0] = "H"
console.log(msg)

//you can assign a new value to the string
let mes = "hello"
mes = 'Hello'
console.log(mes)

//length of a string
console.log(mes.length)

//js strings are case sensitive
let value1 = 'A';
let value2 = 'a';
console.log(value1 == value2)

//js string object
let val1 = 'Hello';
let val2 = new String('Hello');


console.log(val1)
console.log(typeof val2 ,`:`, val2)


//convert to string
let Value1 = 215;
let Value2 = true;

let res1 = String(Value1)
let res2 = String(Value2)


console.log(res1 , `:`, typeof res1)
console.log(res2 , `:`, typeof res2)

//multiline strings
let multiline = `The smart 
dog jumped
over the 
lazy fox.`
console.log(multiline)


//js string method

//concat
let num1 = ["a","b"]
let num2 = ['c','d']

let num3 = num1.concat(num2)
console.log(num3)

//replace
const Message = "Ball bat";

let result = Message.replace("B","C")
console.log(result)

//split
const Msg = "Javascript::is::fun";

let Result = Msg.split("::")

console.log(Result)

//substring
const word = "Javascript is fun"

let call = word.substring(0,10)
console.log(call)

//trim
const Word = "             Javscript                "

let Trim_res = Word.trim()
console.log(Trim_res)

//includes
const newMessage = "Javascipt is fun"

let check = newMessage.includes('Java')

console.log(check)


//search
let sentence = "I love Javascript"

//pattern that seraches the first occurence of an uppercase
let regExp = /[a-z]/

//searching for a match between regExp and given string
let indexReg = sentence.search(regExp)

console.log(indexReg)