// Import the functions you need from the SDKs you need
import {
  get,
  getDatabase,
  set,
  ref,
  onValue
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_ZPQZod-51qVgrZdEYcVVQUq7BwbJ1SM",
  authDomain: "jsi31-9cb9c.firebaseapp.com",
  databaseURL: "https://jsi31-9cb9c-default-rtdb.firebaseio.com",
  projectId: "jsi31-9cb9c",
  storageBucket: "jsi31-9cb9c.appspot.com",
  messagingSenderId: "497104379899",
  appId: "1:497104379899:web:2907a1172843e5fd29b55e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

let nameInput = document.getElementById("name");
let ageInput = document.getElementById("age");
let emailInput = document.getElementById("email");
let add_btn = document.getElementById("add_btn");

add_btn.addEventListener("click", function () {
  set(ref(database, "User/" + "user1"), {
    name: nameInput.value,
    age: ageInput.value,
    email: emailInput.value
  }).then(() => {
    alert("Success");
  });
});
