// Default Values for Function Arguments

function showMsg(message, names) {
    alert(message + names)
}

showMsg("Hello, my name is ", "Marteen Motun Mubaraq")


function showMsg(message, names) {
    if (names == undefined) {
        names = "Ateeyah"
    }
    alert(message + names)
}
showMsg("Hello, my name is ")


function showMsg(message, names="Motun") {
    alert(message + names)
}

showMsg("Hello, my name is ")