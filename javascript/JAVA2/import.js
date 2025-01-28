//import from default export 
import Message from ".export.js"
const person1 = new Message("mary",20,"female")
person1.greet()



//import from named export
import {age, fname, lname,name} from"./modules.js";

console.log(name, age, fname, lname)
