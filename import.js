
import { age,lName,fName, name } from "./module.js";
console.log(name,age,fName,lName)

//importing defult export
import Message from "./export.js";

const user =new Message ("sarah",21,"Female")

user.greet()