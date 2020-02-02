key = JSON.parse(localStorage.getItem("user"))
if (JSON.parse(localStorage.getItem("usersData"))[key].theme == "themeBlue") {
    document.getElementById("body").classList.remove("themeLightGrey")
    document.getElementById("body").classList.add("themeBlue")
}

function setLocalTheme() {
    if (document.getElementById("body").className == "themeLightGrey") {
        key = localStorage.getItem("user")
        let newData = JSON.parse(localStorage.getItem("usersData"))
        newData[key].theme = "themeLightGrey"
        localStorage.setItem("usersData", JSON.stringify(newData))
    } else if (document.getElementById("body").className == "themeBlue") {
        key = localStorage.getItem("user")
        let newData = JSON.parse(localStorage.getItem("usersData"))
        newData[key].theme = "themeBlue"
        localStorage.setItem("usersData", JSON.stringify(newData))
    }
}

// alterar o tema visualmente
function changeTheme() {
    document.getElementById("body").classList.toggle("themeLightGrey")
    document.getElementById("body").classList.toggle("themeBlue")
}

// adicionar o listener ao butão de calcular o IMC
document.getElementById("btnGetIMC").addEventListener("click", function() {
    showIMC()
})

// calcular o IMC
function showIMC() {
    const userHeight = document.getElementById("userHeight").value
    const userWeight = document.getElementById("userWeight").value
    let imc = userWeight / ((userHeight/100) * (userHeight/100))
    imc = Math.round(imc)
    console.log(userWeight);
    console.log(userHeight);
    console.log(imc);
    let response
if (userHeight && userWeight) {
    if (imc < 18.5) {
        response = "Baixo Peso"
    } else if (imc >= 18.5 && imc <= 24.9) {
        response = "Peso Normal"
    } else if (imc >= 25 && imc <= 29.9) {
        response = "Pré-Obesidade"
    } else if (imc >= 30 && imc <= 34.9) {
        response = "Obesidade grau I"
    } else if (imc >= 35 && imc <= 39.9) {
     response = "Obesidade grau II"   
    } else if (imc > 40) response = "Obesidade grau III"
document.getElementById("showIMC").innerHTML = `O seu índice de massa corporal é ${imc} e está dentro do <span class="font-weight-bold">${response} </span>`
} else alert("Preencha os dados")
}

// remover os dados do utilizador ao terminar sessão
function deleteUserData() {
    localStorage.removeItem("user")
}