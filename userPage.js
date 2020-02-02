// Ir buscar o tema do utilizador
key = JSON.parse(localStorage.getItem("user"))
if (JSON.parse(localStorage.getItem("usersData"))[key].theme == "themeBlue") {
    document.getElementById("body").classList.remove("themeLightGrey")
    document.getElementById("body").classList.add("themeBlue")
}

// mostrar as categorias na barra de seleção
async function getCategories() {
    const data = await fetch(`http://my-json-server.typicode.com/TiagoMoreira-top/Projeto-Tecnologias-Web/categories`)
    const json = await data.json()
    for (let i = 0; i < json.length; i++) {
        document.getElementById("sltCategory").innerHTML += `<option value="${i}"> ${json[i].strCategory} </option>`
    }
}
getCategories()

// adicionar listeners aos botões do plano de treino e alimentar
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

// mostrar o plano alimentar
async function getEatingPlan(value) {
    const data = await fetch(`http://my-json-server.typicode.com/TiagoMoreira-top/Projeto-Tecnologias-Web/categories`)
    const json = await data.json()
    document.getElementById("exercises").innerHTML = ""
    document.getElementById("eatingPlan").innerHTML = ""
    document.getElementById("categoryTitle").innerHTML = ""
    document.getElementById("categoryTitle").innerHTML = `<br> <h1 id="dinamicCategoryTitle" class="font-weight-bold row justify-content-center"> ${json[value].strCategory} </h1>`
    document.getElementById(`dinamicCategoryTitle`).addEventListener("click", function () {
        document.getElementById("eatingPlan").innerHTML = ""
        document.getElementById("categoryTitle").innerHTML = ""
    })
    const breakfast = json[value].breakfast
    const lunch = json[value].lunch
    const dinner = json[value].dinner
    document.getElementById("eatingPlan").innerHTML += ` <br> <h5 class="font-weight-bold"> Pequeno Almoço: </h5> <br> <div class="d-flex justify-content-center flex-wrap text-center" id="breakfastOptions"> </div>`
    document.getElementById("eatingPlan").innerHTML += ` <br> <h5 class="font-weight-bold"> Almoço: </h5> <br> <div id="lunchOptions" class="d-flex justify-content-center flex-wrap text-center"> </div>`
    document.getElementById("eatingPlan").innerHTML += ` <br> <h5 class="font-weight-bold"> Jantar: </h5> <br> <div id="dinnerOptions" class="d-flex justify-content-center flex-wrap text-center"> </div>`
    for (let i = 0; i < 2; i++) {
        document.getElementById("breakfastOptions").innerHTML += `<div class="text-light blue rounded-left rounded-right border"> <br> <p> ${breakfast[i].meal} </p> <br> <img class="images" src="${breakfast[i].img}"></div>`
        document.getElementById("lunchOptions").innerHTML += ` <div class="text-light blue rounded-left rounded-right border"> <br> <p> ${lunch[i].meal} </p> <br> <img class="images" src="${lunch[i].img}"> </div> `
        document.getElementById("dinnerOptions").innerHTML += ` <div class="text-light blue rounded-left rounded-right border"> <br> <p> ${dinner[i].meal} </p> <br> <img class="images" src="${dinner[i].img}"> </div> `
    }
}

// mostrar o plano de treino
async function getExercicesByCategory(value) {
    const data = await fetch(`http://my-json-server.typicode.com/TiagoMoreira-top/Projeto-Tecnologias-Web/categories`)
    const json = await data.json()
    const exercises = json[value].exercises
    document.getElementById("eatingPlan").innerHTML = ""
    document.getElementById("exercises").innerHTML = ""
    document.getElementById("categoryTitle").innerHTML = ""
    document.getElementById("categoryTitle").innerHTML = `<br> <h1 id="dinamicCategoryTitle" class="font-weight-bold row justify-content-center"> ${json[value].strCategory} </h1> <br>`
    document.getElementById(`dinamicCategoryTitle`).addEventListener("click", function () {
        document.getElementById("exercises").innerHTML = ""
        document.getElementById("categoryTitle").innerHTML = ""
    })
    for (let i = 0; i < exercises.length; i++) {
        const exercise = exercises[i][`strExercise`]
        const id = exercises[i][`idExercise`]
        const execution = exercises[i][`strExecution`]
        const youtube = exercises[i][`strYoutube`]
        const repetitions = exercises[i][`repetitions`]
        const series = exercises[i][`series`]
        document.getElementById("exercises").innerHTML += `<div class="text-light blue rounded-left rounded-right border"> <br> <div id="${id}"> <p> <span> EXERCÍCIO </span>: <span class="font-weight-bold"> ${exercise} </span> </div> <p> Descrição: ${execution} </p> <p> Nº de repetições: ${repetitions} <p> Nº de Séries: ${series} </p> <br> <a class="bg-danger red text-light rounded" href="${youtube}"> YouTube Tutorial </a> </div> <br>`
        document.getElementById(`${id}`).classList.add("text-uppercase")
    }
}

// ir buscar o tema do utilizador
key = localStorage.getItem("user")
const userTheme = JSON.parse(localStorage.getItem("usersData"))[key].theme
if (userTheme == "themeLightGrey") {
    document.getElementById("body").classList.add("themeLightGrey")
}
if (userTheme == "themeBlue") {
    document.getElementById("body").classList.add("themeBlue")
}

// alterar o tema do utilizador no localStorage
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

// ir buscar o nome do utilizador
const user = localStorage.getItem("user")
const name = JSON.parse(localStorage.getItem("usersData"))[user].name
document.getElementById("user").innerHTML = name

// remover os dados do utilizador ao terminar sessão
function deleteUserData() {
    localStorage.removeItem("user")
}
