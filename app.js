// ----------test------
var firebaseConfig = {
    apiKey: "AIzaSyDC5jTR7TFpB8zqLV9QFBQFJNaUw5tz07o",
    authDomain: "test-ddee8.firebaseapp.com",
    databaseURL: "https://test-ddee8.firebaseio.com",
    projectId: "test-ddee8",
    storageBucket: "test-ddee8.appspot.com",
    messagingSenderId: "96812955082",
    appId: "1:96812955082:web:18c6698181bf35cc1e8b33",
    measurementId: "G-95LB7H68E9"
  };


// --------------js-test-db

// const firebaseConfig = {
//     apiKey: "AIzaSyBQdaBdKXhnQwF0fYeSOf2UkWeWT_jZj0w",
//     authDomain: "js-test-db.firebaseapp.com",
//     databaseURL: "https://js-test-db.firebaseio.com",
//     projectId: "js-test-db",
//     storageBucket: "js-test-db.appspot.com",
//     messagingSenderId: "392859062627",
//     appId: "1:392859062627:web:f6ab44fe839dd2a7214356",
//     measurementId: "G-YLMK5TJXBL"
//   };

  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);


//   const a = document.getElementById('list');
  
  var dbRef = firebase.database().ref().child('Meta Data');
  dbRef.on('value', snap => {
    document.getElementById('list').innerText = JSON.stringify(snap.val().SNC.tel_num['290903'],null,1)
    });
    
  
