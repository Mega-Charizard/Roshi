
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
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

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";

    function add_room()
    {
      console.log("we are testing");
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose:"add room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";

    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name - " + Room_names);

      row = "<div class='room_name' id=" + Room_names + "onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();


function logout()
{

}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}