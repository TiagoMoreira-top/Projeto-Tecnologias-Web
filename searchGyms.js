let userLat
let userLon
let service

getLocation()

// procurar ginásios perto do utilizador usando a api do googleMaps
function initialize() {

   const userLocation = new google.maps.LatLng(userLat, userLon);

   const request = {
      location: userLocation,
      radius: '2500',
      type: ['gym']
   }

   service = new google.maps.places.PlacesService(document.getElementById("abc"));
   service.nearbySearch(request, callback)

}

function callback(results, status) {
   console.log("entrou");
   if (status == google.maps.places.PlacesServiceStatus.OK) {
      console.log(results);
      let gymsDiv = document.getElementById("gyms")
   gymsDiv.innerHTML = ""
   for (let i = 0; i < results.length; i++) {
      gymsDiv.innerHTML += ` <div id="card${i}" class="text-light border rounded blue"> <br> <h5> ${results[i].name} </h5> <br> <div id="img${i}"> </div> <br> <br> <p> ${results[i].vicinity} </p> <div> `
      if (results[i].photos != undefined) if (results[i].photos[0].raw_reference != undefined) if (results[i].photos[0].raw_reference.fife_url != undefined) document.getElementById(`img${i}`).innerHTML = `<img class="images" src="${results[i].photos[0].raw_reference.fife_url}">`
      // mostrar estrelas de rating
      if (results[i].rating > 4.51) { document.getElementById(`card${i}`).innerHTML += `<p id="rating${i}"> Rating:  <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star></i> </p>` } else
      if (results[i].rating > 4) { document.getElementById(`card${i}`).innerHTML += `<p id="rating${i}"> Rating:  <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-half"></i> </p>` } else
      if (results[i].rating > 3.51) { document.getElementById(`card${i}`).innerHTML += `<p id="rating${i}"> Rating:  <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </p>` } else
      if (results[i].rating > 3) { document.getElementById(`card${i}`).innerHTML += `<p id="rating${i}"> Rating:  <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-half"></i> </p>` } else
      if (results[i].rating > 2.51) { document.getElementById(`card${i}`).innerHTML += `<p id="rating${i}"> Rating:  <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i>  </p>` } else
      if (results[i].rating > 2) { document.getElementById(`card${i}`).innerHTML += `<p id="rating${i}"> Rating:  <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-half"></i> </p>` } else
      if (results[i].rating > 1.51) { document.getElementById(`card${i}`).innerHTML += `<p id="rating${i}"> Rating:  <i class="fa fa-star"></i> <i class="fa fa-star"></i> </p>` } else
      if (results[i].rating > 1) { document.getElementById(`card${i}`).innerHTML += `<p id="rating${i}"> Rating:  <i class="fa fa-star"></i> <i class="fa fa-star-half"></i> </p>` } else
      if (results[i].rating > 0.5) { document.getElementById(`card${i}`).innerHTML += `<p id="rating${i}"> Rating:  <i class="fa fa-star"></i> </p>` } else
      if (results[i].rating > 0) { document.getElementById(`card${i}`).innerHTML += `<p id="rating${i}"> Rating:  <i class="fa fa-star-half"></i> </p>` } else {}
    }
   }
}

// Obter a localização do utilizador
function getLocation() {
   if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
   }
}

function showPosition(position) {
   userLat = position.coords.latitude
   userLon = position.coords.longitude
}

let myResults = [
    {
         "geometry" : {
            "location" : {
               "lat" : 41.34927210000001,
               "lng" : -8.7460947
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 41.35059003029151,
                  "lng" : -8.744831719708499
               },
               "southwest" : {
                  "lat" : 41.34789206970851,
                  "lng" : -8.747529680291503
               }
            }
         },
         "photos": [
            {
               "raw_reference": {
                  "fife_url": "https://i.pinimg.com/originals/e4/34/2a/e4342a4e0e968344b75cf50cf1936c09.jpg"
               }
            }
         ],
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
         "id" : "9713aa5a9fbce4702d3cda03315649cb1798320d",
         "name" : "HOP studio",
         "opening_hours" : {
            "open_now" : true
         },
         "place_id" : "ChIJuwzbaABEJA0RF0AnKymCMcI",
         "plus_code" : {
            "compound_code" : "87X3+PH Vila do Conde, Portugal",
            "global_code" : "8CHH87X3+PH"
         },
         "rating" : 5,
         "reference" : "ChIJuwzbaABEJA0RF0AnKymCMcI",
         "scope" : "GOOGLE",
         "types" : [ "gym", "health", "point_of_interest", "establishment" ],
         "user_ratings_total" : 1,
         "vicinity" : "Avenida Júlio Graça 238, Vila do Conde"
      }
]

function showGyms() {
   let gymsDiv = document.getElementById("gyms")
   gymsDiv.innerHTML = ""
   for (let i = 0; i < myResults.length; i++) {
      console.log(myResults);
      gymsDiv.innerHTML += ` <div id="card${i}" class="text-light border rounded blue"> <br> <h5> ${myResults[i].name} </h5> <br> <div id="img${i}"> </div> <br> <br> <p> ${myResults[i].vicinity} </p> <div> `
      if (myResults[i].photos != undefined) if (myResults[i].photos[0].raw_reference.fife_url) document.getElementById(`img${i}`).innerHTML =  `<img class="images" src="${myResults[i].photos[0].raw_reference.fife_url}"> <br>`
      if (myResults[i].rating > 4.51) { document.getElementById(`card${i}`).innerHTML += `<p id="rating${i}"> Rating:  <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star></i>  </p>` } else
      if (myResults[i].rating > 4) { document.getElementById(`card${i}`).innerHTML += `<p id="rating${i}"> Rating:  <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-half"></i> </p>` } else
      if (myResults[i].rating > 3.51) { document.getElementById(`card${i}`).innerHTML += `<p id="rating${i}"> Rating:  <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </p>` } else
      if (myResults[i].rating > 3) { document.getElementById(`card${i}`).innerHTML += `<p id="rating${i}"> Rating:  <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-half"></i> </p>` } else
      if (myResults[i].rating > 2.51) { document.getElementById(`card${i}`).innerHTML += `<p id="rating${i}"> Rating:  <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i>  </p>` } else
      if (myResults[i].rating > 2) { document.getElementById(`card${i}`).innerHTML += `<p id="rating${i}"> Rating:  <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-half"></i> </p>` } else
      if (myResults[i].rating > 1.51) { document.getElementById(`card${i}`).innerHTML += `<p id="rating${i}"> Rating:  <i class="fa fa-star"></i> <i class="fa fa-star"></i> </p>` } else
      if (myResults[i].rating > 1) { document.getElementById(`card${i}`).innerHTML += `<p id="rating${i}"> Rating:  <i class="fa fa-star"></i> <i class="fa fa-star-half"></i> </p>` } else
      if (myResults[i].rating > 0.5) { document.getElementById(`card${i}`).innerHTML += `<p id="rating${i}"> Rating:  <i class="fa fa-star"></i> </p>` } else
      if (myResults[i].rating > 0) { document.getElementById(`card${i}`).innerHTML += `<p id="rating${i}"> Rating:  <i class="fa fa-star-half"></i> </p>` } else {}
   }
}
console.log(myResults);
console.log(myResults[0].name);
console.log(myResults[0].rating);

// ir buscar o tema do utilizador
key = localStorage.getItem("user")
const userTheme = JSON.parse(localStorage.getItem("usersData"))[key].theme
if (userTheme == "themeLightGrey") {
   document.getElementById("body").classList.add("themeLightGrey")
}
if (userTheme == "themeDark") {
   document.getElementById("body").classList.add("themeDark")
}

// alterar o tema do utilizador na local storage
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

// alterar o tema visualmente
function changeTheme() {
   document.getElementById("body").classList.toggle("themeLightGrey")
   document.getElementById("body").classList.toggle("themeDark")
}

// remover os dados do utilizador ao terminar sessão
function deleteUserData() {
   localStorage.removeItem("user")
}