let text = document.getElementById("inputName")
let email = document.getElementById("inputEmail")
let message = document.getElementById("inputMessage")

function formSubmit() {
    console.log(text.value)
    console.log(email.value)
    console.log(message.value)
}

function showMenu() {
    document.getElementById("navMenu").classList.toggle("showMenu")
}