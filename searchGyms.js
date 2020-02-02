apiKey = "AIzaSyAA1nMi1QDSZ1w7pJ6InpthhFgM9zVeaCI"
let userLat
let userLon
let service

getLocation()

// procurar ginásios perto do utilizador usando a api do googleMaps
function initialize() {

   const userLocation = new google.maps.LatLng(userLat, userLon);

const request = {
    location: userLocation,
    radius: '1500',
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
         if (results[i].rating > 4.5) { document.getElementById(`card${i}`).innerHTML += `<p id="rating${i}"> Rating:  <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"</i>  </p>` } else
         if (results[i].rating > 4.24) { document.getElementById(`card${i}`).innerHTML += `<p id="rating${i}"> Rating:  <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-half"></i> </p>` } else
         if (results[i].rating > 3.5) { document.getElementById(`card${i}`).innerHTML += `<p id="rating${i}"> Rating:  <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </p>` } else
         if (results[i].rating > 3.24) { document.getElementById(`card${i}`).innerHTML += `<p id="rating${i}"> Rating:  <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-half"></i> </p>` } else
         if (results[i].rating > 2.5) { document.getElementById(`card${i}`).innerHTML += `<p id="rating${i}"> Rating:  <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i>  </p>` } else
         if (results[i].rating > 2.24) { document.getElementById(`card${i}`).innerHTML += `<p id="rating${i}"> Rating:  <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-half"></i> </p>` } else
         if (results[i].rating > 1.5) { document.getElementById(`card${i}`).innerHTML += `<p id="rating${i}"> Rating:  <i class="fa fa-star"></i> <i class="fa fa-star"></i> </p>` } else
         if (results[i].rating > 1.24) { document.getElementById(`card${i}`).innerHTML += `<p id="rating${i}"> Rating:  <i class="fa fa-star"></i> <i class="fa fa-star-half"></i> </p>` } else
         if (results[i].rating > 0.5) { document.getElementById(`card${i}`).innerHTML += `<p id="rating${i}"> Rating:  <i class="fa fa-star"></i> </p>` } else
         if (results[i].rating > 0.24) { document.getElementById(`card${i}`).innerHTML += `<p id="rating${i}"> Rating:  <i class="fa fa-star-half"></i> </p>` } else {}
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

// ir buscar o tema do utilizador
key = localStorage.getItem("user")
const userTheme = JSON.parse(localStorage.getItem("usersData"))[key].theme
if (userTheme == "themeLightGrey") {
   document.getElementById("body").classList.add("themeLightGrey")
}
if (userTheme == "themeBlue") {
   document.getElementById("body").classList.add("themeBlue")
}

// alterar o tema do utilizador na local storage
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

// remover os dados do utilizador ao terminar sessão
function deleteUserData() {
   localStorage.removeItem("user")
}
