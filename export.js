//defaulu export
function Message( name,age,gender){
    this. name =name,
    this.age = age,
    this.gender = gender
    this.greet = function(){
        console.log(
            `hello ${ this.name} you are ${this.age} yrs old and you are a ${ this.gender}` 
        )
    }
}
export default Message