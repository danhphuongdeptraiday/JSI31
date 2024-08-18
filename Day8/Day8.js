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

let post_title = document.getElementById("post_title");
let post_image = document.getElementById("post_image");
let post_description = document.getElementById("post_description");
let add_post = document.getElementById("add_post");

add_post.addEventListener("click", function (e) {
  e.preventDefault();
  let post_id = window.uuidv4();
  console.log(post_id);

  let Object = {
    post_title: post_title.value,
    post_image: post_image.value,
    post_description: post_description.value
  };

  set(ref(database, "All_Posts/" + post_id), Object).then(() => {
    console.log("Thêm post thành công");
  });
});

// set(parameter1, parameter2) => set(ref(tên_database, "/đường dẫn"), {Object mà ta muốn lưu})
// parameter1 => Chứa đường dẫn muốn lưu
// parameter2 => Object muốn lưu vào đường dẫn
