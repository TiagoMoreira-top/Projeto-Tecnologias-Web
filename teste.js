localStorage.setItem("theme", "lightGrey")

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

async function getEatingPlan(category) {
    const data = await fecth(`http://my-json-server.typicode.com/TiagoMoreira-top/Projeto-Tecnologias-Web/${category}`)
    const json = data.json()
    console.log(json);
}

document.getElementById("btnUserWeight").addEventListener("click", function () {
    const categoryElement = document.querySelector("#sltWeight")
    const categoryValue = categoryElement.options[categoryElement.selectedIndex].text
    document.getElementById("btnUserWeight").classList.add("d-none")
    document.getElementById("btnUndoUserWeight").classList.remove("d-none")
})

document.getElementById("btnUndoUserWeight").addEventListener("click", function () {
    document.getElementById("btnUserWeight").classList.remove("d-none")
    document.getElementById("btnUndoUserWeight").classList.add("d-none")
})

async function getExercicesByCategory(value) {
    const data = await fetch(`http://my-json-server.typicode.com/TiagoMoreira-top/Projeto-Tecnologias-Web/categories`)
    const json = await data.json()
    document.getElementById("categoryTitle").innerHTML = json[value].strCategory
    console.log(json[value].exercises);
    const exercises = json[value].exercises
    document.getElementById("exercises").innerHTML = ""
    document.getElementById("categoryTitle").innerHTML = ""
    document.getElementById("categoryTitle").innerHTML = `<h1  class="font-weight-bold"> ${json[value].strCategory} </h1> <br>`
    let color = "grey"
    for (let i = 0; i < exercises.length; i++) {
        const exercise = exercises[i][`strExercise`]
        const id = exercises[i][`idExercise`]
        const execution = exercises[i][`strExecution`]
        const youtube = exercises[i][`strYoutube`]
        const repetitions = exercises[i][`repetitions`]
        const series = exercises[i][`series`]
        if (exercise && color == "grey") {
            document.getElementById("exercises").innerHTML += `<div class="text-light bg-secondary rounded-left rounded-right"> <div id="${id}"> <p> <span> EXERCÍCIO </span>: <span class="font-weight-bold"> ${exercise} </span> </div> <p> Descrição: ${execution} </p> <p> Nº de repetições: ${repetitions} <p> Nº de Séries: ${series} </p> </p> </p> <a class="bg-danger text-light rounded" href="${youtube}"> YouTube Tutorial </a> </div> <br>`
            document.getElementById(`${id}`).classList.add("text-uppercase")
            color = "dark"
        } else if (exercise && color == "dark") {
            document.getElementById("exercises").innerHTML += `<div class="text-light lightGrey rounded-left rounded-right"> <div id="${id}"> <p> <span> EXERCÍCIO </span>: <span class="font-weight-bold"> ${exercise} </span> </div> <p> Descrição: ${execution} </p> <p> Nº de repetições: ${repetitions} <p> Nº de Séries: ${series} </p> </p> </p> <a class="bg-danger text-light rounded" href="${youtube}"> YouTube Tutorial </a> </div> <br>`
            document.getElementById(`${id}`).classList.add("text-uppercase")
            color = "grey"
        }
    }
    document.getElementById("exercises").innerHTML += ` <br> <button class="btn btn-secondary">Plano Alimentar</button> <br> <br>`
    const images = json[value].images
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
    }
}

let theme = localStorage.getItem("theme")

document.getElementById("themeDark").addEventListener("click", function() {
    document.getElementById("body").classList.remove("themeLightGrey")
    document.getElementById("body").classList.add("themeDark")
    console.log(localStorage.getItem("theme"));
})

document.getElementById("themeLightGrey").addEventListener("click", function() {
    document.getElementById("body").classList.remove("themeDark")
    document.getElementById("body").classList.add("themeLightGrey")
    localStorage.getItem("theme") 
})