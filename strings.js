//single quoth
let name='john'
console.log(name)

//duble quote
let fruits ='apple'
console .log(fuits)

//backtic
let car="benz"
console.log (car)

//access string element

//using index 
let message= "hello"
console,log=(message) 





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