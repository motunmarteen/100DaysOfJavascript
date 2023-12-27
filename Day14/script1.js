/* 
This code creates a basic mechanism for asking a user a question via a confirmation dialog box in a browser. The ask function takes three arguments:

question: The message displayed in the confirmation dialog.
yes: A function to be executed if the user answers "Yes" or agrees.
no: A function to be executed if the user answers "No" or cancels.
Then, it defines two functions:

showOk(): Displays an alert saying "You have agreed".
showCancel(): Displays an alert saying "You canceled the execution".
Finally, the ask function is called with the message "Do you agree?", and it prompts the user with the confirmation dialog. If the user confirms by clicking "OK", it executes showOk(), showing the "You have agreed" alert. If the user cancels by clicking "Cancel", it executes showCancel(), showing the "You canceled the execution" alert.
*/

function ask(question, yes, no) {
    if (confirm(question)) {
        yes()
    } else {
        no()
    }
}
function showOk() {
    alert("You have agreed");
}
function showCancel() {
    alert("You canceled the execution");
}
ask("Do you agree?", showOk, showCancel)