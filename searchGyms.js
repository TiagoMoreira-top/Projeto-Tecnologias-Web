apiKey = "AIzaSyBagazMTGHYCgDIHRAgoYEM_w8UPmAtEvA"
let userLat
let userLon
let service

getLocation()

function initialize() {

const userLocation = new google.maps.LatLng(userLat, userLon);

const request = {
    location: userLocation,
    radius: '500',
    type: ['gym']
}

  service = new google.maps.places.PlacesService(document.getElementById("abc"));
  service.nearbySearch(request, callback)
  
}

function callback(results, status) {
   console.log("entrou");
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        console.log(results);
        console.log("entrou");
    }
}

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
            "lat": -33.8667822,
            "lng": 151.1928329
         },
         "viewport": {
            "northeast": {
               "lat": -33.8654122197085,
               "lng": 151.1941653802915
            },
            "southwest": {
               "lat": -33.8681101802915,
               "lng": 151.1914674197085
            }
         }
      },
      "icon": "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
      "id": "51488d14e05c68e4a2d669549391ec4f96f0bb23",
      "name": "Personal Trainer Pyrmont",
      "opening_hours": {
         "open_now": false
      },
      "photos": [
         {
            "height": 626,
            "html_attributions": [
               "\u003ca href=\"https://maps.google.com/maps/contrib/108137823778339419046\"\u003ePersonal Trainer Pyrmont\u003c/a\u003e"
            ],
            "photo_reference": "CmRaAAAAiUKfThEtMX78qx-s_k9hxg-tUdaR0i59qV80fgxY5oxIjzMrY_KPO73mx8pRI9k5BXhllXaoLSvw76cJjj7Ug3chJHWeqNHWGyuJTL4F5nmtlM5kFFY6gn96imqhs_e1EhC4Ueu3BhMWz4xln331ahn7GhR7tov-UYMg1HR-vNClmfYlQSDtug",
            "raw_reference": {
               "fife_url": "https://lh3.googleusercontent.com/p/AF1QipNGLXOXFSigkDZO2nkt6gvKoXfx0GhEYei4N5hb=k"
            },
            "width": 872
         }
      ],
      "place_id": "ChIJmUa5eDauEmsRb1CFYXexFvY",
      "plus_code": {
         "compound_code": "45MV+74 Pyrmont, New South Wales, Austrália",
         "global_code": "4RRH45MV+74"
      },
      "rating": 5,
      "reference": "ChIJmUa5eDauEmsRb1CFYXexFvY",
      "scope": "GOOGLE",
      "types": ["gym", "health", "point_of_interest", "establishment"],
      "user_ratings_total": 1,
      "vicinity": "Scott Street, Pyrmont"
   }
]

console.log(myResults);
console.log(myResults[0].name);
console.log(myResults[0].rating);
