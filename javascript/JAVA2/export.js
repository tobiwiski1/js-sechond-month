function message(name,age,gender){
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.greeet = function(){
    console.log(
        "hello,this.nane", "you are", this.age, "years old and you are"
    )
  }
}