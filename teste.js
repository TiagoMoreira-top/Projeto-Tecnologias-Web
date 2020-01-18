const getExerciseByCategory = async (category) => {
    const data = await fetch(`http://my-json-server.typicode.com/TiagoMoreira-top/Projeto-Tecnologias-Web/${category}`)
    const json = await data.json()
    console.log(json);
    const exercises = json[0].exercises
    console.log(exercises);
    document.getElementById("exercises").innerHTML = ""
    for (let i = 0; i < exercises.length; i++) {
        const exercise = exercises[i][`strExercise`]
        const id = exercises[i][`idExercise`]
        const execution = exercises[i][`strExecution`]
        const youtube = exercises[i][`strYoutube`]
        if (exercise) {
            document.getElementById("exercises").innerHTML += `<div class="border border-secondary text-light"> <div id="${id}"> <p> <span class="${id}"> Exercício </span>: ${exercise} </div> <p> Descrição: ${execution} </p> </p> <a href="${youtube}"> Ver como fazer </a> </div>`
        document.getElementById(`${id}`).classList.add("text-uppercase")
        } 
    }
    document.getElementById("exercises").innerHTML += ` <br> <br> <button class="btn btn-secondary">Plano Alimentar</button>`
    document.getElementById("exercises").addEventListener("click", function() {

    })
}

async function getCategories() {
    const data = await fetch(`http://my-json-server.typicode.com/TiagoMoreira-top/Projeto-Tecnologias-Web/categories`)
    const json = await data.json()
    for (let i = 0; i < json.length; i++) {
        document.getElementById("sltCategory").innerHTML += `<option> ${json[i].strCategory} </option>`

    }
}
getCategories()

document.getElementById("btnExercises").addEventListener("click", function() {
    const categoryElement = document.querySelector("#sltCategory")
    const categoryValue = categoryElement.options[categoryElement.selectedIndex].text
    getExerciseByCategory(categoryValue)
})

async function getEatingPlan(category) {
    const data = await fecth(`http://my-json-server.typicode.com/TiagoMoreira-top/Projeto-Tecnologias-Web/${category}`)
    const json = data.json()
    console.log(json);
}