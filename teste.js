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

const eatingInfo = [
    {
        "categories": [
          {
            "idCategory": 1, 
            "strCategory": "corrida",
            "exercises": [{"idExercise": 1, "strExercise": "Skiping", "strYoutube": "https://www.youtube.com/watch?v=Rb-DIMPjJuo", "strExecution": "Corrida parada elevando o joelho até a altura do quadril(alto) e elevação de 45º no baixo. Manter os braços em um angulo de 90º", "repetitions": "45 segundos", "series": "3"}, {"idExercise": 2, "strExercise": "Anfersen", "strYoutube": "https://www.youtube.com/watch?v=TKuaND_u0j0", "strExecution": "Corrida parada ou em deslocamento elevando o calcanhar até os glúteos (não precisa encostar) coordenado com o movimento de braço", "repetitions": "45 segundos", "series": "3"}, {"idExercise": 3, "strExercise": "dribbling", "strYoutube": "", "strExecution": "Elevar o calcanhar alternadamente sem tirar os pés do chão em movimento lateral em harmonia com os braços", "repetitions": "12", "series": "4"}, {"idExercise": 4, "strExercise": "Hopserlauf", "strYoutube": "", "strExecution": "Elevar pernas e braços alternadamente dando um pequeno salto a cada elevação. Pode ser feito parado ou em deslocamento", "repetitions": "12", "series": "4"}, {"idExercise": 5, "strExercise": "Kick out", "strYoutube": "", "strExecution": "Correr jogando os pés alternadamente para frente, como se estivesse chutando. Coordenar o movimento lateral dos braços", "repetitions": "30 segundos", "series": "3"}],
            "breakfast": [{"meal": "Ovos mexidos com cogumelos", "img": "https://i2.wp.com/www.pilotandoumfogao.com.br/blog/wp-content/uploads/2015/12/Ovos-mexidos-com-cogumelos.jpg", "url":"http://www.pilotandoumfogao.com.br/2016/01/04/ovos-mexidos-com-cogumelos/"}, {"meal": "Pão de queijo de frigideira", "img":"http://cdn.blogdamimis.com.br/wp-content/uploads/2014/09/p%C3%A0o-de-quejo-de-frigideira-frango-Michelle-franzoni-blog-da-mimis-post.jpg", "url":"http://blogdamimis.com.br/2014/09/23/pao-de-queijo-de-frigideira/"}],
            "lunch": [{"meal": "Salmão Grelhado com Molho de Limão", "img":"http://web.archive.org/web/20130826045025im_/http://comidadodia.com/wp-content/uploads/2011/09/IMG_1188.jpg", "url":"http://web.archive.org/web/20180425143935/http://comidadodia.com/salmao-grelhado-com-molho-de-limao/"}, {"meal":"Frango com legumes","img":"http://cdn.blogdamimis.com.br/wp-content/uploads/2015/08/frango-com-legumes-blog-da-mimis-michelle-franzoni-post.png","url":"http://blogdamimis.com.br/2015/08/18/frango-com-legumes/"}],
            "dinner": [{"meal":"Salada verde com salmão selado", "img":"http://culinariaparareceber.com.br/wp-content/uploads/2014/11/foto.png", "url":"http://www.culinariaparareceber.com.br/2014-11-04/salada-verde-com-salmao-selado-2/"}, {"meal":"“Pizza” de berinjela e abobrinha gratinadas", "img":"https://melepimenta.com/wp-content/uploads/2014/09/pizzaberingelanova.jpg", "url":"http://www.melepimenta.com/2014/09/pizza-de-berinjela-e-abobrinha.html"}],
            "images": [{"idImg": 1, "strImg": "AdobeStock_306140311_Preview.jpeg"}, {"idImg": 2, "strImg": "AdobeStock_176854577_Preview.jpeg"}, {"idImg": 3, "strImg": "AdobeStock_84682944_Preview.jpeg"}]
          },
          {
          "idCategory": 2,
          "strCategory": "football",
          "exercises": [{"idExercise": 1, "strExercise": "Flexões", "strYoutube": "https://www.youtube.com/watch?v=IODxDxX7oi4", "strExecution": "", "repetitions": "", "series": ""}, {"idExercise": 2, "strExercise": "Press de Ombro", "strYoutube": "https://www.youtube.com/watch?v=5yWaNOvgFCM", "strExecution": "", "repetitions": "", "series": ""}, {"idExercise": 3, "strExercise": "Agachamento", "strYoutube": "", "strExecution": "", "repetitions": "", "series": ""}, {"idExercise": 4, "strExercise": "Burpies", "strYoutube": "", "strExecution": "", "repetitions": "", "series": ""}, {"idExercise": 5, "strExercise": "Lunges", "strYoutube": "", "strExecution": "", "repetitions": "", "series": ""}],
          "breakfast": [{"meal":"Panqueca de Banana com Pasta de Amendoim","img":"https://missfit.blog.br/wp-content/uploads/2015/12/wpid-wp-1450465447870-1024x573.jpg","url":"https://missfit.blog.br/panqueca-de-banana-com-pasta-de-amendoim/"}, {"meal":"Tosta de Amêndoa e maçã caramelizada com canela","img":"https://www.loveat.pt/wordpress/wp-content/uploads/2020/01/IMG_0430-768x1152.jpg","url":"https://www.loveat.pt/2020/01/tosta-de-amendoa-e-maca-caramelizada-com-canela.html"}],
          "lunch": [{"meal": "Omelete com queijo e abacate","img":"https://www.pingodoce.pt/wp-content/uploads/2019/03/omelete-com-queijo-e-abacate.jpg","url":"https://www.pingodoce.pt/receitas/omelete-com-queijo-e-abacate/"}, {"meal":"Salada de tomate com mozzarella","img":"https://www.pingodoce.pt/wp-content/uploads/2019/03/salada-de-tomate-com-mozzarella.jpg","url":"https://www.pingodoce.pt/receitas/salada-de-tomate-com-mozzarella/"}],
          "dinner": [{"meal":"Cubos de frango com vegetais e ervas","img":"https://abrilclaudia.files.wordpress.com/2016/09/cubos-de-frango-com-vegetais-ervas.jpg?quality=85&strip=info&resize=680,453","url":"https://claudia.abril.com.br/gastronomia/cubos-de-frango-com-vegetais-e-ervas/"}, {"meal":"Sopa de tomate com lentilhas","img":"https://www.pingodoce.pt/wp-content/uploads/2019/01/sopa-tomate-com-lentilhas.jpg","url":"https://www.pingodoce.pt/receitas/sopa-de-tomate-com-lentilhas-vermelhas/"}]
          },
          {
          "idCategory": 3,
          "strCategory": "basketball",
          "exercises": [{"idExercise": 1, "strExercise": "Agachamentos", "strYoutube": "", "strExecution": "", "repetitions": "", "series": ""}, {"idExercise": 2, "strExercise": "", "strYoutube": "", "strExecution": "", "repetitions": "", "series": ""}, {"idExercise": 3, "strExercise": "", "strYoutube": "", "strExecution": "", "repetitions": "", "series": ""}, {"idExercise": 4, "strExercise": "", "strYoutube": "", "strExecution": "", "repetitions": "", "series": ""}, {"idExercise": 5, "strExercise": "", "strYoutube": "", "strExecution": "", "repetitions": "", "series": ""}],
          "breakfast": [{"meal": "Crumble de granola e cacau com manga e amoras","img":"https://www.loveat.pt/wordpress/wp-content/uploads/2019/03/Webp.net-resizeimage-3.jpg","url":"https://www.loveat.pt/2019/03/crumble-de-granola-e-cacau-com-manga-e-amoras.html"}, {"meal": "Papa de quinoa com curcuma, coco e nozes","img":"https://www.loveat.pt/wordpress/wp-content/uploads/2020/01/POST-6-scaled.jpg","url":"https://www.loveat.pt/2020/01/papa-de-quinoa-com-curcuma-coco-e-nozes-para-2-doses.html"}],
          "lunch": [{"meal": "Bolinho de espinafre, brócolis e ricota","img":"https://tofuncional.files.wordpress.com/2016/01/img_1608.jpeg","url":"https://amabilekolenda.com/2016/01/02/bolinho-de-espinafre-brocolis-e-ricota-ou-tofu/"}, {"meal":"Robalo Grelhado com Cogumelos Salteados","img":"https://www.figosefunghis.com.br/wp-content/uploads/2014/07/Robalo-Grelhado-com-cogumelos-salteados.jpg","url":"https://www.figosefunghis.com.br/robalo-grelhado-com-cogumelos-salteados/"}],
          "dinner": [{"meal":"Omelete à Florentina","img":"http://www.segredosdatiaemilia.com.br/wp-content/uploads/2014/03/omelete-a-florentina-2.jpg","url":"http://www.segredosdatiaemilia.com.br/2014/03/21/omelete-a-florentina/"}, {"meal":"Legumes com gergelim salteados no shoyu","img":"http://cozinhatravessa.com.br/wp-content/uploads/2015/04/DSC2624.jpg","url":"http://cozinhatravessa.com.br/post/receita-de-legumes-com-gergelim-salteados-no-shoyu/"}]},
          {
          "idCategory": 4,
          "strCategory": "volleyball",
          "exercises": [{"idExercise": 1, "strExercise": "", "strYoutube": "", "strExecution": "", "repetitions": "", "series": ""}, {"idExercise": 2, "strExercise": "", "strYoutube": "", "strExecution": ""}, {"idExercise": 3, "strExercise": "", "strYoutube": "", "strExecution": ""}, {"idExercise": 4, "strExercise": "", "strYoutube": "", "strExecution": ""}, {"idExercise": 5, "strExercise": "", "strYoutube": "", "strExecution": ""}],
          "breakfast": [{"meal": "Pudim de chia com macaccino","img":"https://www.loveat.pt/wordpress/wp-content/uploads/2017/05/IMG_8691.jpg","url":"https://www.loveat.pt/2017/05/pudim-de-chia-com-macaccino.html"}, {"meal": "Papa de quino com laranja","img":"https://www.loveat.pt/wordpress/wp-content/uploads/2017/08/fgkp7-e1538238694567.jpg","url":"https://www.loveat.pt/2017/08/papa-quinoa-laranja.html"}],
          "lunch": [{"meal": "Beirute de ricota","img":"http://cdn.blogdamimis.com.br/wp-content/uploads/2015/06/Beirute-de-ricota-blog-da-mimis-michelle-franzoni-post1.png","url":"http://blogdamimis.com.br/2015/06/24/beirute-de-ricota/"}, {"meal":"Frango Grelhado ao Molho de Laranja e Purê de Batata","img":"https://web.archive.org/web/20200116182717im_/http://1.bp.blogspot.com/-NhtdHOXZogw/VeeflnRBZXI/AAAAAAAAy6I/3HnkyeabpIU/s640/Frango+com+Molho+de+Laranja+800x600.jpg","url":"https://web.archive.org/web/20170926230829/http://www.jantaresadois.com.br:80/2015/09/receita--dia-dia-frango-grelhado.html"}],
          "dinner": [{"meal":"Salada fresca de agrião com rabanetes","img":"https://www.teleculinaria.pt/wp-content/uploads/2015/04/salada-fresca-de-agri%C3%B5es-e-rabanetes-768x474.png","url":"https://www.teleculinaria.pt/receitas/entradas-e-petiscos/salada-fresca-de-agriao-com-rabanetes/"}, {"meal":"Delícia de frango","img":"https://www.teleculinaria.pt/wp-content/uploads/2015/04/del%C3%ADcia-de-frango-768x472.png","url":"https://www.teleculinaria.pt/receitas/carnes/delicia-de-frango/"}]},
          {
          "idCategory": 5,
          "strCategory": "swimming",
           "exercises": [{"idExercise": 1, "strExercise": "Flexões Abertas", "strYoutube": "", "strExecution": "", "repetitions": "", "series": ""}, {"idExercise": 2, "strExercise": "Flexões fechadas", "strYoutube": "", "strExecution": ""}, {"idExercise": 3, "strExercise": "", "strYoutube": "", "strExecution": ""}, {"idExercise": 4, "strExercise": "", "strYoutube": "", "strExecution": ""}, {"idExercise": 5, "strExercise": "", "strYoutube": "", "strExecution": ""}],
           "breakfast": [{"meal": "","img":"","url":""}, {"meal": "","img":"","url":""}],
          "lunch": [{"meal": "","img":"","url":""}, {"meal":"","img":"","url":""}],
          "dinner": [{"meal":"","img":"","url":""}, {"meal":"","img":"","url":""}]},
          {
          "idCategory": 6,
          "strCategory": "marcialarts",
          "exercises": [{"idExercise": 1, "strExercise": "", "strYoutube": "", "strExecution": "", "repetitions": "", "series": ""}, {"idExercise": 2, "strExercise": "", "strYoutube": "", "strExecution": ""}, {"idExercise": 3, "strExercise": "", "strYoutube": "", "strExecution": ""}, {"idExercise": 4, "strExercise": "", "strYoutube": "", "strExecution": ""}, {"idExercise": 5, "strExercise": "", "strYoutube": "", "strExecution": ""}],
          "breakfast": [{"meal": "","img":"","url":""}, {"meal": "","img":"","url":""}],
          "lunch": [{"meal": "","img":"","url":""}, {"meal":"","img":""}],
          "dinner": [{"meal":"","img":"","url":""}, {"meal":"","img":"","url":""}]}
        ]
      }
]

console.log(eatingInfo[0]);
console.log(eatingInfo[0].categories[0].strCategory);
