// // Default export
function Message(name,age,gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.greet = function(){
        console.log(
            `Hello ${this.name} You are ${this.age} Years old now and you are a ${this.gender}.`
        )
    }
}

export default Message;