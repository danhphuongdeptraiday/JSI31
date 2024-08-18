//////////////////////////////////////////////////////////////////////////// Import CHUNG
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";

import {
  get,
  getDatabase,
  set,
  ref,
  onValue,
  update,
  remove,
  push,
  child
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

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
const auth = getAuth();

// Dùng DOM
let email_login = document.getElementById("email_input_login");
let password_login = document.getElementById("password_input_login");
let email_register = document.getElementById("email_input_register");
let password_register = document.getElementById("password_input_register");
let login_btn = document.getElementById("login_btn");
let register_btn = document.getElementById("register_btn");

///////////////////////////////////////////////////////////////////// Đăng ký 1 tài khoản
register_btn.addEventListener("click", function () {
  let email = email_register.value;
  let password = password_register.value;

  createUserWithEmailAndPassword(auth, email, password) // Check xem cái user này tồn tại chưa
    .then((userCredential) => {
      const user = userCredential.user;
      set(ref(database, "users/" + user.uid), {
        email: email,
        password: password,
        author_post: ["Bài viết 1", "Bài viết 2", "Bài viết 3"]
      });

      alert("Tạo tài khoản thành công");
    })
    .catch((err) => {
      const errorCode = err.code;
      const errorMess = err.message;

      alert(errorMess);
    });
});

////////////////////////////////////////////////////////////////////// Đăng nhập 1 tải khoản có sẵn
login_btn.addEventListener("click", function () {
  let email = email_login.value;
  let password = password_login.value;
  var user;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      user = userCredential.user;
      let date = new Date();
      update(ref(database, "users/" + user.uid), {
        lastLogin: date
      });
    })
    .then(() => {
      alert("Đăng nhập thành công");

      let userInfor = {
        userId: user.uid,
        email: email
      };
      localStorage.setItem("currentUser", JSON.stringify(userInfor));
      // Gợi ý, hàm lưu vào localStorage là localStorage.setItem(key, value)
      window.location.href = "./home.html";
    })
    .catch((err) => {
      const errorCode = err.code;
      const errorMess = err.message;

      alert(errorMess);
    });
});
