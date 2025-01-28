let input = document.getElementById("input")
let list = document.getElementById("list")


function Add(){
    let item = input.value;
    if(item == ""){
        alert('Input must not be empty')
    }else{
        let li = document.createElement("li")
        li.innerHTML = item
        list.appendChild(li)
    }
}