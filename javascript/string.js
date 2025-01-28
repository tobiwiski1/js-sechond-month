let text = "Hello World";

console.log(text.slice(0,5));
console.log(text.slice(5));
console.log(text.slice(7));
console.log(text.slice(7,12));
console.log(text.slice(1));
console.log(text.slice(0,-1));
console.log(text.slice(-1));

 //concat
 let t1 = "Hello";
 let t2 = "World";
 console.log(t1.concat(t2));
let t3 = " ";
console.log(t1.concat(t3,t2));
 
// trim
let space = "     Hello    world   "
console.log(space);
console.log(space.length);
console.log(space.trim());
console.log(space.trim().length);

//startTrim
console.log(space.trimStart());
console.log(space.trimStart().length);

// trimEnd
console.log(space.trimEnd());
console.log(space.trimEnd().length);

//spilt
text = "Hello";
console.log(text.split(""));
text = "Hello world"
console.log(text.split(" "));
console.log(text.split(" ").join(""));

//Removing all space or white space
text ="hello    world    hi";
console.log(text.split(" ").join(""));

function countStr(str) {
    console.log(str.split(" ").join(""));
    console.log(str.split(" ").join("").length);
}

countStr("h            e                y");

// Swapping the value of the variables
let e = 6;
let f = 7;
let g = 8;

// Array destructuring
[e,f,g] = [g,f,e]

console.log(`e ==> ${e}`)
console.log(`f ==> ${f}`)
console.log(`g ==> ${g}`)

//index.html
function fileExtension(file) {
    if(file.includes(".")){
        let dot = file.indexOf(".") + 1
        console.log(file.slice(dot))
    }else {
        console.log("Error : Invalid file name")
    }
}


fileExtension("index.html")
fileExtension("picture.jpg")
fileExtension("picture.jpeg")
fileExtension("string.js")

function word(words){
    let split = words.trim().split(" ")
    console.log(split)
    console.log(split.length)
    let count = 0 
    split.forEach(word => {
        if (word != ""){
            count++
        }
    });
    console.log(count)
}

word("Hello    world how    are        you      ")

function Palindrome(str){
    let reverse = str.split("").reverse().join("")
    console.log(reverse)
    if(reverse.toLowerCase() == str.toLowerCase()){
        console.log("Palindrome")
    }
    else{
        console.log("Not palindrome")
    }
}
Palindrome("madam")
Palindrome("hello")
Palindrome("Wow")

let t4 = "Six";
let t5 = "Packs"
let t6 = " "
console.log(t4.concat(t6,t5))

let contacts = "Six packs"

console.log(contacts.slice(3))