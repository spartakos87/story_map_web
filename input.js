var file=""

var currentDt = new Date();
    var mm = currentDt.getMonth() + 1;
    var dd = currentDt.getDate();
    var yyyy = currentDt.getFullYear();
    var s = currentDt.getSeconds();
    var m = currentDt.getMinutes();
    var h = currentDt.getHours();
const image_name = mm + '-' + dd + '-' + yyyy+"-"+h+"-"+m+"-"+s;

 var config = {
    apiKey: "AIzaSyCyvi6yqyI3oelwckdP4DLW97RAwruN-ic",
    authDomain: "storymap-da000.firebaseapp.com",
    databaseURL: "https://storymap-da000.firebaseio.com",
    projectId: "storymap-da000",
    storageBucket: "storymap-da000.appspot.com",
    messagingSenderId: "443585925665"
  };
 firebase.initializeApp(config);

window.addEventListener('load', function() {

const fileButton = document.getElementById("fileButton");
const up = document.getElementById("up")


});

fileButton.addEventListener('change', function(e){
                 file = e.target.files[0];

});
const myform = document.querySelector('form');
myform.addEventListener('submit', myFun);


function myFun(e){
 e.preventDefault();

var lat = new URL(location.href).searchParams.get("lat")
var lng = new URL(location.href).searchParams.get("lng")
var title = document.getElementById("title").value
var story = document.getElementById("story").value

if (title == "" || story == "" || file == ""){
alert("Do not left any field empty")
} else{
var database = firebase.firestore()

database.collection("Stories").add({
title:title,
story:story,
lat: lat,
lng:lng,
url:image_name});


                var storageRef = firebase.storage().ref(image_name);
               storageRef.put(file)
}
}

function goBack(){

window.open("index.html","_self")
}
