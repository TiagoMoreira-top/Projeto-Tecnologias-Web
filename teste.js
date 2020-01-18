const getExerciseByCategory = async (category) => {
    const data = await fetch(`http://my-json-server.typicode.com/TiagoMoreira-top/Projeto-Tecnologias-Web/running`)
    const json = await data.json()
}
getExerciseByCategory()

async function abc() {
    const data = await fetch(`http://my-json-server.typicode.com/TiagoMoreira-top/Projeto-Tecnologias-Web/categories`)
    const json = await data.json()
    console.log(json);
    for (let i = 0; i < json.length; i++) {
        document.getElementById("sltCategory").innerHTML += `<option> ${json[i].strCategory} </option>`
        document.getElementById("btnExercises").addEventListener("click", function() {
            const categoryElement = document.querySelector("#sltCategory")
            const categoryValue = categoryElement.options[categoryElement.selectedIndex].text
            getExerciseByCategory(categoryValue)
        })
    }
}
abc()


