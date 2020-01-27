document.getElementById("btnGetIMC").addEventListener("click", function() {
    showIMC()
})

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
    } else response = "Não faças exercício que não é preciso"
document.getElementById("showIMC").innerHTML = `O seu índice de massa corporal é ${imc} e está dentro do <span class="font-weight-bold">${response} </span>`
} else alert("Preencha os dados")
}