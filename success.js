var lat = new URL(location.href).searchParams.get("lat")
var lng = new URL(location.href).searchParams.get("lng")
var title = new URL(location.href).searchParams.get("title")
var story = new URL(location.href).searchParams.get("story")
var url = new URL(location.href).searchParams.get("url")
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
database.collection("Stories").add({
title:title,
story:story,
lat:lat,
lng:lng,
url:url


});

