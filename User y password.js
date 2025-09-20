const users = []

document.getElementById("btnRegistro").addEventListener("click", function(){
    let user = prompt(`Cree un nombre de usuario`)
    while(user === " "){
        alert(`El nombre de usuario no puede contener espacion en blaco. Intente de nuevo.`)
        user = prompt(`Cree un nombre de usuario`)
    }
    let password = prompt(`Cree una contraseña. La contraseña debe contener 6 dígitos.`)
    while(password.length > 6 || password.length < 6){
        alert(`Error, la contraseña debe contener 6 dígitos. Intente de nuevo.`)
        password = prompt(`Cree una contraseña.`)
    }
    users.push({Usuario: user, Contraseña: password})
})