async function abc() {
    const data = await fetch(`http://my-json-server.typicode.com/TiagoMoreira-top/Projeto-Tecnologias-Web/categories`)
    const json = await data.json()
    console.log(json);
}
abc()

async function abcd() {
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    const json = await data.json()
    console.log(json);
}
abcd()