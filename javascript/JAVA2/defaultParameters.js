function country(name){
  console.log(`The name of my country is ${name}`)
}
country("London")
country()

function Country(name = "Nigeria"){
  console.log(`The name of my country is ${name}`)
}
Country("France")
Country()

function multiply(x = 8, y = 2){
  console.log(x * y)
}
multiply(2,3)
multiply()

function cars(car = "Benz"){
  console.log(`The Name Of My Car is ${car}`)
}
cars("Tesla")
cars()
cars("Lambo")