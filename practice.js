const firebaseConfig = {
    apiKey: "AIzaSyDUU04zoizxfWTJxCYmmA8LNlYm8WHOYyk",
    authDomain: "back-to-school-chats.firebaseapp.com",
    databaseURL: "https://back-to-school-chats-default-rtdb.firebaseio.com",
    projectId: "back-to-school-chats",
    storageBucket: "back-to-school-chats.appspot.com",
    messagingSenderId: "299527438139",
    appId: "1:299527438139:web:a85a378678469ba374c11e"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function add_user()
  {
      var user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).child("meep_kong").update({
          meep:"zilla"
      });
    }