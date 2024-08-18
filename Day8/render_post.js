import {
  get,
  getDatabase,
  set,
  ref,
  onValue
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-VUYAjILneziBmLgpd0zD-SqKuVdExTA",
  authDomain: "post-app-abd59.firebaseapp.com",
  databaseURL: "https://post-app-abd59-default-rtdb.firebaseio.com",
  projectId: "post-app-abd59",
  storageBucket: "post-app-abd59.appspot.com",
  messagingSenderId: "959045780892",
  appId: "1:959045780892:web:c2cbdc6b0dcabe665a7459"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

let myPromise = new Promise((resolve, reject) => {
  var myCompleteData;
  onValue(ref(database, "All_Posts"), (myData) => {
    myCompleteData = Object.values(myData.val());

    for (let i = 0; i < myCompleteData.length; i++) {
      let div = document.createElement("div");
      div.style.border = "1px solid red";
      div.innerHTML = JSON.stringify(myCompleteData[i]);
      document.body.appendChild(div);

      if (i === myCompleteData.length - 1) {
        resolve();
      }
    }
  });
});

myPromise.then(async () => {
  // xử lý resolve
  // Trong này chúng ta sẽ xử lý dome
});
