key = JSON.parse(localStorage.getItem("user"))
if (JSON.parse(localStorage.getItem("usersData"))[key].theme == "themeDark") {
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
    console.log(json);
    document.getElementById("exercises").innerHTML = ""
    document.getElementById("eatingPlan").innerHTML = ""
    console.log(json[value].breakfast[0].meal);
    const breakfast = json[value].breakfast
    const lunch = json[value].lunch
    const dinner = json[value].dinner
    document.getElementById("eatingPlan").innerHTML += `Pequeno Almoço: <br> <div class="d-flex justify-content-center flex-wrap text-center" id="breakfastOptions"> </div>`
    document.getElementById("eatingPlan").innerHTML += `Almoço: <br> <div id="lunchOptions" class="d-flex justify-content-center flex-wrap text-center"> </div>`
    document.getElementById("eatingPlan").innerHTML += `Jantar: <br> <div id="dinnerOptions" class="d-flex justify-content-center flex-wrap text-center"> </div>`
    for (let i = 0; i < breakfast.length; i++) {
        document.getElementById("breakfastOptions").innerHTML += `<div class="text-light blue rounded-left rounded-right border"> <p> ${breakfast[i].meal} ${breakfast[i].img} </p></div>`
        document.getElementById("lunchOptions").innerHTML += ` <div class="text-light blue rounded-left rounded-right border"><p> ${lunch[i].meal} </p></div> `
    document.getElementById("dinnerOptions").innerHTML += ` <div class="text-light blue rounded-left rounded-right border"><p> ${dinner[i].meal} </p></div> `
    }
}

async function getExercicesByCategory(value) {
    const data = await fetch(`http://my-json-server.typicode.com/TiagoMoreira-top/Projeto-Tecnologias-Web/categories`)
    const json = await data.json()
    console.log(json[value].exercises);
    const exercises = json[value].exercises
    document.getElementById("eatingPlan").innerHTML = ""
    document.getElementById("exercises").innerHTML = ""
    document.getElementById("categoryTitle").innerHTML = ""
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

key = localStorage.getItem("user")
const userTheme = JSON.parse(localStorage.getItem("usersData"))[key].theme
if (userTheme == "themeLightGrey") {
    document.getElementById("body").classList.add("themeLightGrey")
}
if (userTheme == "themeDark") {
    document.getElementById("body").classList.add("themeDark")
}


function setLocalTheme() {
    if (document.getElementById("body").className == "themeLightGrey") {
        key = localStorage.getItem("user")
        let newData = JSON.parse(localStorage.getItem("usersData"))
        newData[key].theme = "themeLightGrey"
        localStorage.setItem("usersData", JSON.stringify(newData))
    } else if (document.getElementById("body").className == "themeDark") {
        key = localStorage.getItem("user")
        let newData = JSON.parse(localStorage.getItem("usersData"))
        newData[key].theme = "themeDark"
        localStorage.setItem("usersData", JSON.stringify(newData))
    }
}

function changeTheme() {
    document.getElementById("body").classList.toggle("themeLightGrey")
    document.getElementById("body").classList.toggle("themeDark")
}

const user = localStorage.getItem("user")
const name = JSON.parse(localStorage.getItem("usersData"))[user].name
document.getElementById("user").innerHTML = name

function deleteUserData() {
    localStorage.removeItem("user")
}
