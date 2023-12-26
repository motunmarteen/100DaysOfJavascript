//  GLOBAL VARIABLE

let firstName = prompt("What is your first name? ");
let lastName = prompt("What is your last name? ");


function showMessage() {
    alert(`My name is ${firstName} ${lastName}`);
}
showMessage(firstName, lastName)



// LOCAL VARIABLE

function localV() {
    let n = "I am a boy"
    alert(n)
}
localV()