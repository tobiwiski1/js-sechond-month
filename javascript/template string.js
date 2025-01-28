let firstName = `John`;
let lastName = `Doe`;
console.log(typeof firstName)
console.log(typeof lastName)

let name = "David"
let age = 20;

// string interpolation
let message =` Hello ${name} you are ${age} years old`;
console.log(message);

let add = ` 2 + 2 = ${2 + 2}`;
console.log(add);

let time = `The time says ${new Date().toLocaleString()}`;
console.log(time);

let copy = `© ${new Date().getFullYear()}`;
console.log(copy);

// multiline
let multiline = `This is a multiline string
with multple lines
and special characters like \n,this \t, space \r hello`

console.log(multiline)

let text = "Hello \nHow are you? \n\tI am fine";
let swap = "\tHello \rtable";
console.log(text)
console.log(swap)
