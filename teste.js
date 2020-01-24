if (localStorage.getItem("theme") == "dark") {
    document.getElementById("body").classList.remove("themeLightGrey")
    document.getElementById("body").classList.add("themeDark")
}

async function getCategories() {
    const data = await fetch(`http://my-json-server.typicode.com/TiagoMoreira-top/Projeto-Tecnologias-Web/categories`)
    const json = await data.json()
    for (let i = 0; i < json.length; i++) {
        document.getElementById("sltCategory").innerHTML += `<option value="${i}"> ${json[i].strCategory} </option>`
    }
}
getCategories()

document.getElementById("btnTrainningPlan").addEventListener("click", function () {
    const categoryElement = document.querySelector("#sltCategory")
    const categoryValue = categoryElement.options[categoryElement.selectedIndex].value
    getExercicesByCategory(categoryValue)
})

document.getElementById("btnEatingPlan").addEventListener("click", function () {
    const categoryElement = document.querySelector("#sltCategory")
    const categoryValue = categoryElement.options[categoryElement.selectedIndex].value
    getEatingPlan(categoryValue)
})

async function getEatingPlan(value) {
    const data = await fetch(`http://my-json-server.typicode.com/TiagoMoreira-top/Projeto-Tecnologias-Web/categories`)
    const json = await data.json()
    document.getElementById("exercises").innerHTML = ""
    document.getElementById("eatingPlan").innerHTML = ""
    console.log(json[value].breakfast[0].meal);
    const breakfast = json[value].breakfast
    document.getElementById("eatingPlan").innerHTML += `Pequeno Almoço: <br> <ul id="breakfastOptions"> </ul>`
    for (let i = 0; i < breakfast.length; i++) {
        document.getElementById("breakfastOptions").innerHTML += ` <li> ${breakfast[i].meal} </li> `
    }
    document.getElementById("eatingPlan").innerHTML += `Almoço: <br> <ul id="lunchOptions"> </ul>`
    document.getElementById("eatingPlan").innerHTML += `Jantar: <br> <ul id="dinnerOptions"> </ul>`
}

async function getExercicesByCategory(value) {
    const data = await fetch(`http://my-json-server.typicode.com/TiagoMoreira-top/Projeto-Tecnologias-Web/categories`)
    const json = await data.json()
    console.log(json[value].exercises);
    const exercises = json[value].exercises
    document.getElementById("eatingPlan").innerHTML = ""
    document.getElementById("exercises").innerHTML = ""
    document.getElementById("categoryTitle").innerHTML = ""
    document.getElementById("btnEatingPlan").innerHTML = ""
    document.getElementById("categoryTitle").innerHTML = `<br> <h1 class="font-weight-bold row justify-content-center"> ${json[value].strCategory} </h1> <br>`
    let color = "grey"
    for (let i = 0; i < exercises.length; i++) {
        const exercise = exercises[i][`strExercise`]
        const id = exercises[i][`idExercise`]
        const execution = exercises[i][`strExecution`]
        const youtube = exercises[i][`strYoutube`]
        const repetitions = exercises[i][`repetitions`]
        const series = exercises[i][`series`]
        if (exercise && color == "grey") {
            document.getElementById("exercises").innerHTML += `<div class="text-light blue rounded-left rounded-right border"> <br> <div id="${id}"> <p> <span> EXERCÍCIO </span>: <span class="font-weight-bold"> ${exercise} </span> </div> <p> Descrição: ${execution} </p> <p> Nº de repetições: ${repetitions} <p> Nº de Séries: ${series} </p> </p> </p> <a class="bg-danger red text-light rounded" href="${youtube}"> YouTube Tutorial </a> </div> <br>`
            document.getElementById(`${id}`).classList.add("text-uppercase")
            color = "dark"
        } else if (exercise && color == "dark") {
            document.getElementById("exercises").innerHTML += `<div class="text-light lightGrey rounded-left rounded-right border"> <br> <div id="${id}"> <p> <span> EXERCÍCIO </span>: <span class="font-weight-bold"> ${exercise} </span> </div> <p> Descrição: ${execution} </p> <p> Nº de repetições: ${repetitions} <p> Nº de Séries: ${series} </p> </p> </p> <a class="bg-danger red text-light rounded" href="${youtube}"> YouTube Tutorial </a> </div> <br>`
            document.getElementById(`${id}`).classList.add("text-uppercase")
            color = "grey"
        }
    }
    document.getElementById("btnEatingPlan").classList.remove("d-none")
    document.getElementById("btnEatingPlan").innerHTML = "Plano Alimentar"
    document.getElementById("box").style.height = "350px"

    /*  const images = json[value].images
     console.log(images);
     document.getElementById("images").innerHTML = `<img id="img0"
     src="C:/Users/tdfmo/OneDrive/Ambiente de Trabalho/Tiago/ProjetoTW/Imagens/AdobeStock_214657508_Preview.jpeg"
     alt="">
 <img id="img1"
     src="C:/Users/tdfmo/OneDrive/Ambiente de Trabalho/Tiago/ProjetoTW/Imagens/AdobeStock_164712654_Preview.jpeg"
     alt="">
 <img id="img2"
     src="C:/Users/tdfmo/OneDrive/Ambiente de Trabalho/Tiago/ProjetoTW/Imagens/AdobeStock_195637927_Preview.jpeg"
     alt="">`
     if (images) {
         for (let i = 0; i < images.length; i++) {
             image = images[i][`strImg`]
             document.getElementById(`img${i}`).src = `C:/Users/tdfmo/OneDrive/Ambiente de Trabalho/Tiago/ProjetoTW/Imagens/${image}`
         }
     } */
}
console.log(document.getElementById("body").className);

if (localStorage.getItem("theme") != undefined) {
    document.getElementById("body").className = `theme${localStorage.getItem("theme")}`
}
console.log(document.getElementById("body").className);

function setLocalTheme() {
    if (document.getElementById("body").className == "themeLightGrey") {
        localStorage.setItem("theme", "LightGrey")
    } else if (document.getElementById("body").className == "themeDark") {
        localStorage.setItem("theme", "Dark")
    }
}

function changeTheme() {
    document.getElementById("body").classList.toggle("themeLightGrey")
    document.getElementById("body").classList.toggle("themeDark")
}

document.getElementById("btnIMC").addEventListener("click", function() {
    document.getElementById("alertBoxGetIMC").classList.remove("d-none")
})

document.getElementById("btnCloseAlertBox").addEventListener("click", function() {
    document.getElementById("alertBoxGetIMC").classList.add("d-none")
})

document.getElementById("btnGetIMC").addEventListener("click", function() {
    showIMC()
})

function showIMC() {
    const userHeight = document.getElementById("userHeight").value
    const userWeight = document.getElementById("userWeight").value
    let imc = userWeight / ((userHeight/100) * (userHeight/100))
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
    } 
document.getElementById("showIMC").innerHTML = `O seu índice de massa corporal é ${imc} Está dentro do <span class="font-weight-bold">${response} </span>`
} else alert("Preencha os dados")
}