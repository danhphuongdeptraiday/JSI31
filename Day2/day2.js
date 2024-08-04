// Để khái báo 1 function
// function ten_function (){}
// 1 function được chạy khi nó được gọi tên
// 1. Void function(): Là 1 function ko có dữ liệu trả về

// VD1
function print() {
  console.log("Hello World");
}

// chạy function
// print();

// VD2
let x = 10;
function changeValue() {
  x = 20;
}

changeValue();

// console.log(x);

// 2. Function có parameter, 1 function có thể nhận được nhiều parameter

// let t = 10;

// function binhPhuong(n, a, b) {
//   var q = n ** 2;
//   console.log(q);
//   console.log(a);
//   console.log(b);
// }

// binhPhuong(t, "Thắng", "Đao");

// 3. Function có return: Giá trị trả về chính bằng lúc ta gọi tên function

// function currentName(name) {
//   return name + "chưa quá ấn tượng ở euro";

//   console.log("Hello");
// }

// console.log(currentName("Harry Kane"));

// Bài toán đố

/**
 * Tên function branch(X)
 * Tạo ra 1 function có parameter và return check X
 * Nếu X == 1 trả về "Nhánh 1"
 * Nếu X == 2 trả về "Nhánh 2"
 * Nếu giá trị X không bằng 1 trong 2 thì sẽ trả về là "không thỏa mãn"
 */

// function branch(X) {
//   if (X == 1) {
//     return "Nhánh 1";
//   } else if (X == 2) {
//     return "Nhánh 2";
//   }

//   return "Không thỏa mãn";
// }

// console.log(branch(3));

// DOM:
/**
 * Truy cập vào các thẻ trong HTML:
 * - document.getElementById("tên_id")
 * - document.getElementsByClass("tên_class") => trả về 1 mảng
 * - document.getElementsByTagName("tên_thẻ") => Trả về 1 mảng
 *
 * Dùng để chỉnh sửa HTML, CSS:
 * - Gán/Truy cập vào nội dung của thẻ: tên_thẻ.innerText/innerHTML
 * - tên_thẻ.style.thuộc_tính = "Giá trị tương đương"
 * Thay đổi thuộc tính của 1 thẻ
 * Thay đối cấu trúc của thẻ
 * Gán sự kiện trong 1 trang web
 */

let h1_name = document.getElementById("name");
h1_name.innerText = "ABC"; // thay đổi nội dung của 1 thẻ
h1_name.style.color = "red"; // thay đổi CSS
console.log(h1_name.innerText);

// Thay đổi màu chữ của tất cả thẻ có class là line1 => Xanh nước biển
// Thay đổi màu chữ của tất cả thẻ có class là line2 => Xanh lá cây

let li_tag = document.getElementsByTagName("li");
console.log(li_tag[0].innerText);
console.log(li_tag[1].innerText);
console.log(li_tag[2].innerText);

let line1 = document.getElementsByClassName("line1");
console.log(line1[0]);
line1[0].style.color = "blue";
line1[1].style.color = "blue";

let line2 = document.getElementsByClassName("line2");
console.log(line2);

line2[0].style.color = "red";
line2[1].style.color = "red";

let ul = document.getElementsByTagName("ul");

let t = 100;

// Tạo thẻ trong HTML trong qua DOM(JS)
let newBox = document.createElement("div");

newBox.innerText = "<u>Hello các bạn</u>";
newBox.innerText = `<u>Hello ${t} bạn</u> <h1>Minh Đăng học k tập trung</h1>`;
newBox.style.width = "200px";
newBox.style.height = "200px";
newBox.style.backgroundColor = "pink";

// Thêm vào ul
ul[0].appendChild(newBox);

// Thêm thẻ đó vào body
// document.body.appendChild(newBox);

// Phân biệt innerText và innerHTML
