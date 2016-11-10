var blog = "Mukum Blog";
var firebase = require("firebase");
  // Initialize Firebase
    var config = {
      apiKey: "AIzaSyAJtPQwqPa6e2a0mXenvqE3yfqysfVN9lo",
      authDomain: "insenly-bf9c3.firebaseapp.com",
      databaseURL: "https://insenly-bf9c3.firebaseio.com",
      storageBucket: "insenly-bf9c3.appspot.com",
      messagingSenderId: "147095314071"
    };
    firebase.initializeApp(config);

    var ref = firebase.database().ref('Blog1');
    	//blog = snapshot.val();
	  ref.on("value", function(snapshot) {
	     console.log(snapshot.val());
	  }, function (error) {
	     console.log("Error: " + error.code);
	});