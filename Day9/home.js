let currentUser = JSON.parse(localStorage.getItem("currentUser"));
let current_user_email = document.getElementById("current_user_email");

// Gán giá trị
current_user_email.innerText = currentUser.email;
