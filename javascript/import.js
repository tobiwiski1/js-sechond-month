import Message from "./export.js"
import { age, fName, lName, name } from "./module.js"

console.log(name, age, fName, lName)

const user = new Message("John", 20, "Male")
user.greet()

