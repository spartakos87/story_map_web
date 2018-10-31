
var lat = new URL(location.href).searchParams.get("lat")
var lng = new URL(location.href).searchParams.get("lng")
/*
 var config = {
    apiKey: "AIzaSyCyvi6yqyI3oelwckdP4DLW97RAwruN-ic",
    authDomain: "storymap-da000.firebaseapp.com",
    databaseURL: "https://storymap-da000.firebaseio.com",
    projectId: "storymap-da000",
    storageBucket: "storymap-da000.appspot.com",
    messagingSenderId: "443585925665"
  };
 firebase.initializeApp(config);

  var ref = firebase.storage().ref();

var fileButton = document.getElementById("pic");
            fileButton.addEventListener('change', function(e){
                var file = e.target.files[0];
                var storageRef = firebase.storage().ref(file.name);
                storageRef.put(file);
});
*/
function WriteData(){
var lat = new URL(location.href).searchParams.get("lat")
var lng = new URL(location.href).searchParams.get("lng")
//const name = (+new Date()) + '-' + file.name;



var title = document.getElementById("title").value
var story = document.getElementById("story").value
//var path = document.getElementById("pic").files[0].path; 




window.open("success.html"+"?lat="+lat+"&lng="+lng+"&title="+title+"&story="+story,'windowname', 'width=500, height=400')
//window.location.href="success.html"+"?lat="+lat+"&lng="+lng+"&title="+title+"&story="+story;
//window.open("success.html")

}
