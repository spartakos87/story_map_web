
var lat = new URL(location.href).searchParams.get("lat")
var lng = new URL(location.href).searchParams.get("lng")

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

function WriteData(){
var lat = new URL(location.href).searchParams.get("lat")
var lng = new URL(location.href).searchParams.get("lng")
//const name = (+new Date()) + '-' + file.name;



var title = document.getElementById("title").value
var story = document.getElementById("story").value



window.open("success.html"+"?lat="+lat+"&lng="+lng+"&title="+title+"&story="+story+"&url="+image_name,'windowname', 'width=500, height=400')


}


