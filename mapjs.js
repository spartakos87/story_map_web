  var config = {
    apiKey: "AIzaSyCyvi6yqyI3oelwckdP4DLW97RAwruN-ic",
    authDomain: "storymap-da000.firebaseapp.com",
    databaseURL: "https://storymap-da000.firebaseio.com",
    projectId: "storymap-da000",
    storageBucket: "storymap-da000.appspot.com",
    messagingSenderId: "443585925665"
  };
 firebase.initializeApp(config);

var database = firebase.firestore()


 
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
} else {
    alert('It seems like Geolocation, which is required for this page, is not enabled in your browser. Please use a browser which supports it.');
}
function successFunction(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
var map = L.map('map').setView([lat,lon], 14);

        mapLink = 
            '<a href="http://openstreetmap.org">OpenStreetMap</a>';
 L.tileLayer(
            'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; ' + mapLink + ' Contributors',
            maxZoom: 18,
            }).addTo(map);



// Draw the markers,which read from firebase , in map
database.collection("Stories").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data().title);
var coordinate = doc.data()


 L.marker([Number(coordinate.lat), Number(coordinate.lng)],{id:doc.id}).addTo(map);

})})



    console.log('Your latitude is :'+lat+' and longitude is '+lon);



map.on('click', function(e) {
window.open("input.html"+"?lat="+e.latlng.lat+"&lng="+e.latlng.lng,"_self")
//    alert(e.latlng.lat);
});

}

function errorFunction(){
console.log("Fail")


}


function test(){
console.log("test")
}

