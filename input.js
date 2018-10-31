var lat = new URL(location.href).searchParams.get("lat")
var lng = new URL(location.href).searchParams.get("lng")
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
function WriteData(){
const file = document.querySelector('#pic').files[0];
const name = (+new Date()) + '-' + file.name;
const metadata = { contentType: file.type };
const task = ref.child(name).put(file, metadata);



var title = document.getElementById("title").value
var story = document.getElementById("story").value
//var path = document.getElementById("pic").files[0].path; 




window.open("success.html"+"?lat="+lat+"&lng="+lng+"&title="+title+"&story="+story,'windowname', 'width=500, height=400')
//window.location.href="success.html"+"?lat="+lat+"&lng="+lng+"&title="+title+"&story="+story;
//window.open("success.html")

}
