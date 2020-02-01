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

let myResults = [
   {
      "geometry": {
         "location": {
            "lat": 41.1333818,
            "lng": -8.560787099999999
         },
         "viewport": {
            "northeast": {
               "lat": 41.1346980302915,
               "lng": -8.559441669708496
            },
            "southwest": {
               "lat": 41.1320000697085,
               "lng": -8.562139630291501
            }
         }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/school-71.png",
      "id": "b8858143e2e2235c226eb3e19eb54c31116172f3",
      "name": "Pavilhão Escola Secundária de Valbom",
      "photos": [
         {
            "height": 1080,
            "html_attributions": [
               "\u003ca href=\"https://maps.google.com/maps/contrib/103755504398272767805\"\u003eVitor Fernandes\u003c/a\u003e"
            ],
            "photo_reference": "CmRaAAAA5L5N9PzZWK5TmaMmVITzLSngEk_K6UZa_9eOZ-TJ4F_j-Qemlr4IEE5zNJnFK2nkeCECxwbxYRa8kpYNgSum6J2TTY0sTvH3gxHvA_7VbgvsVfAC2Z_cb3889Y0xcRP3EhCyPAfiJWz3ZV0lMmDjCOEsGhQZNU8GWrP6kUO8wJe_WcfLjjuntQ",
            "raw_reference": {
               "fife_url": "https://lh3.googleusercontent.com/p/AF1QipNzNeUaq2SZol-Adieg1gqBrbIjR0IJXnPbpSJI=k"
            },
            "width": 1920
         }
      ],
      "place_id": "ChIJD7jeU0VjJA0RnMw3NWZ-YyI",
      "plus_code": {
         "compound_code": "4CMQ+9M Valbom, Portugal",
         "global_code": "8CHH4CMQ+9M"
      },
      "rating": 4.5,
      "reference": "ChIJD7jeU0VjJA0RnMw3NWZ-YyI",
      "scope": "GOOGLE",
      "types": ["gym", "health", "point_of_interest", "establishment"],
      "user_ratings_total": 2,
      "vicinity": "Rua Teixeira Lopes, Valbom"
   },
   {
      "geometry": {
         "location": {
            "lat": 41.12967310000001,
            "lng": -8.5613911
         },
         "viewport": {
            "northeast": {
               "lat": 41.13098893029151,
               "lng": -8.560075769708499
            },
            "southwest": {
               "lat": 41.12829096970851,
               "lng": -8.562773730291504
            }
         }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
      "id": "87f728ae757de5f232cc737d6aedf8fbe351b076",
      "name": "Corpo & Exercício",
      "photos": [
         {
            "height": 3024,
            "html_attributions": [
               "\u003ca href=\"https://maps.google.com/maps/contrib/103046419763098127248\"\u003eChristopher Falk\u003c/a\u003e"
            ],
            "photo_reference": "CmRaAAAA7mpFPFdNhj57b61JB-jJjBPWc63ruXU2UVeCdUkXxddZIVjSl5eE1QsUKC8NLAmhJLDw4frHvorHl4E42di3tmvabf5_OsmRIcocsxRrQCn_06JPmZhHahR34jg1dgDBEhDajOKjO9-_f61x62YOgmjnGhRUNSE0s_g1sb6W88uv2rXtb4Bmgg",
            "raw_reference": {
               "fife_url": "https://lh3.googleusercontent.com/p/AF1QipNK_hgQhYhv1DojgKWLx7Y3fHelsqlKegZHEN8d=k"
            },
            "width": 4032
         }
      ],
      "place_id": "ChIJ-VyE2VFjJA0RGASKRhnXnug",
      "plus_code": {
         "compound_code": "4CHQ+VC Valbom, Portugal",
         "global_code": "8CHH4CHQ+VC"
      },
      "rating": 4.5,
      "reference": "ChIJ-VyE2VFjJA0RGASKRhnXnug",
      "scope": "GOOGLE",
      "types": ["gym", "health", "point_of_interest", "establishment"],
      "user_ratings_total": 16,
      "vicinity": "Rua Clube Naval Infante Dom Henrique 438, Valbom"
   }
]
function showGyms() {
   let gymsDiv = document.getElementById("gyms")
   gymsDiv.innerHTML = ""
   for (let i = 0; i < myResults.length; i++) {
      console.log(myResults);
      gymsDiv.innerHTML += ` <div id="card${i}" class="text-light border rounded blue"> <br> <h5> ${myResults[i].name} </h5> <br> <div id="img${i}"> </div> <br> <br> <p> ${myResults[i].vicinity} </p> <div> `
      if (myResults[i].photos != undefined) if (myResults[i].photos[0].raw_reference.fife_url) document.getElementById(`img${i}`).innerHTML =  `<img class="images" src="${myResults[i].photos[0].raw_reference.fife_url}"> <br>`
      if (myResults[i].rating > 4.5) { document.getElementById(`card${i}`).innerHTML += `<p id="rating${i}"> Rating:  <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star></i>  </p>` } else
      if (myResults[i].rating > 4.25) { document.getElementById(`card${i}`).innerHTML += `<p id="rating${i}"> Rating:  <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-half"></i> </p>` } else
      if (myResults[i].rating > 3.5) { document.getElementById(`card${i}`).innerHTML += `<p id="rating${i}"> Rating:  <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </p>` } else
      if (myResults[i].rating > 3.25) { document.getElementById(`card${i}`).innerHTML += `<p id="rating${i}"> Rating:  <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-half"></i> </p>` } else
      if (myResults[i].rating > 2.5) { document.getElementById(`card${i}`).innerHTML += `<p id="rating${i}"> Rating:  <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i>  </p>` } else
      if (myResults[i].rating > 2.25) { document.getElementById(`card${i}`).innerHTML += `<p id="rating${i}"> Rating:  <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star-half"></i> </p>` } else
      if (myResults[i].rating > 1.5) { document.getElementById(`card${i}`).innerHTML += `<p id="rating${i}"> Rating:  <i class="fa fa-star"></i> <i class="fa fa-star"></i> </p>` } else
      if (myResults[i].rating > 1.25) { document.getElementById(`card${i}`).innerHTML += `<p id="rating${i}"> Rating:  <i class="fa fa-star"></i> <i class="fa fa-star-half"></i> </p>` } else
      if (myResults[i].rating > 0.5) { document.getElementById(`card${i}`).innerHTML += `<p id="rating${i}"> Rating:  <i class="fa fa-star"></i> </p>` } else
      if (myResults[i].rating > 0.25) { document.getElementById(`card${i}`).innerHTML += `<p id="rating${i}"> Rating:  <i class="fa fa-star-half"></i> </p>` } else {}
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
