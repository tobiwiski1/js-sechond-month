let x = parseInt(prompt("Enter the value of x from 1 - 3"));
let h3 = document.getElementsByTagName("h3")

switch(x){
    case 1:
        h3[0].innerHTML = `If the day of the week is ${x} It is Sunday`
        break;
    case 2:
        h3[0].innerHTML = `If the day of the week is ${x} It is Monday`
        break;
    case 3:
        h3[0].innerHTML = `If the day of the week is ${x} It is Tuesday`
        break;
    default :
        h3[0].innerHTML = `Invalid Figure`        
}