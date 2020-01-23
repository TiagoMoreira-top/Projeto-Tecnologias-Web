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

async function getEatingPlan(category) {
    const data = await fecth(`http://my-json-server.typicode.com/TiagoMoreira-top/Projeto-Tecnologias-Web/${category}`)
    const json = data.json()
    console.log(json);
}

async function getExercicesByCategory(value) {
    const data = await fetch(`http://my-json-server.typicode.com/TiagoMoreira-top/Projeto-Tecnologias-Web/categories`)
    const json = await data.json()
    console.log(json[value].exercises);
    const exercises = json[value].exercises
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
            document.getElementById("exercises").innerHTML += `<div class="text-light blue rounded-left rounded-right"> <div id="${id}"> <p> <span> EXERCÍCIO </span>: <span class="font-weight-bold"> ${exercise} </span> </div> <p> Descrição: ${execution} </p> <p> Nº de repetições: ${repetitions} <p> Nº de Séries: ${series} </p> </p> </p> <a class="bg-danger text-light rounded" href="${youtube}"> YouTube Tutorial </a> </div> <br>`
            document.getElementById(`${id}`).classList.add("text-uppercase")
            color = "dark"
        } else if (exercise && color == "dark") {
            document.getElementById("exercises").innerHTML += `<div class="text-light lightGrey rounded-left rounded-right"> <div id="${id}"> <p> <span> EXERCÍCIO </span>: <span class="font-weight-bold"> ${exercise} </span> </div> <p> Descrição: ${execution} </p> <p> Nº de repetições: ${repetitions} <p> Nº de Séries: ${series} </p> </p> </p> <a class="bg-danger text-light rounded" href="${youtube}"> YouTube Tutorial </a> </div> <br>`
            document.getElementById(`${id}`).classList.add("text-uppercase")
            color = "grey"
        }
    }
    document.getElementById("btnEatingPlan").innerHTML += ` <br> <button class="btn btn-warning">Plano Alimentar</button> <br> <br>`
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