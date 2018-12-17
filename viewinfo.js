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
//  const ref = firebase.storage().ref();
const docId = new URL(location.href).searchParams.get("id")
var docRef = database.collection("Stories").doc(docId);
docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
        const data = doc.data();

//document.getElementById("docId").value = docId;
document.getElementById("title").value = data.title;
document.getElementById("story").value = data.story;
console.log("url===> "+data.url)
//const url = firebase.storage().ref().child(data.url)
//console.log(url.downloadURL)
var images  = firebase.storage().ref()
var image = images.child(data.url)
image.getDownloadURL().then((url) => {


document.getElementById("myImage").src = url;


 });



    } else {
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});

 function myDelete(){


var docRef = database.collection("Stories").doc(docId);
docRef.get().then(function(doc) {
    if (doc.exists) {

/*
var images  = firebase.storage().ref()
var image = images.child(doc.data().url)
image.delete().then(function() {
    console.log("Image successfully deleted!");
}).catch(function(error) {
    console.error("Error removing image: ", error);
});
*/



}});
database.collection("Stories").doc(docId).delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});




}


function goBack(){
window.open("index.html","_self")

}
