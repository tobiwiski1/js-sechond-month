//implicit type conversion
//numeric string used with +
let result;

//convert number to string
result = "3" + 3
console.log(result)
console.log(result ,"-", typeof result)

result = "3" + false
console.log(result)
console.log(result ,"-", typeof result)

result = "5" + "null"
console.log(result)
console.log(result ,"-", typeof result)


//exlicit type conversion
let res;

//convert string from to number
res = Number("33")
console.log(res)
console.log(res ,"-", typeof res)

//convert boolean to string
res = String(true)
console.log(res)
console.log(res ,"-", typeof res)

//convert number to boolean
res = Boolean(24)
console.log(res)
console.log(res ,"-", typeof res)


//numeric strings used with - , / , *
let Res;

Res = "10" - "5"
console.log(Res)
console.log(Res ,"-", typeof Res)

Res = "5" - 2
console.log(Res)
console.log(Res ,"-", typeof Res)

Res = "5" * 2
console.log(Res)
console.log(Res ,"-", typeof Res)

Res = "10" / 2
console.log(Res)
console.log(Res ,"-", typeof Res)

Res = "3" - "Hello"
console.log(Res)
console.log(Res ,"-", typeof Res)